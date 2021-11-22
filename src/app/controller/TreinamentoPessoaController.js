const { query } = require('express');
const Pessoa = require('../model/TreinamentoPessoa');

let dadoPessoa = '';

class TreinamentoPessoaController {
    
    async adiciona(req, res, next) {
        dadoPessoa = await Pessoa.create(req.body);
        return res.status(200).json(dadoPessoa);
    }

    async buscaTodos(req, res) {
        dadoPessoa = await Pessoa.find({});
        return res.status(200).json(dadoPessoa);
    }

    async buscaNome(req, res) {
        // dadoPessoa = await Pessoa.findOne({ nome: new RegExp('^' + req.body.nome + '$', "i")}, function (err, doc) {
            dadoPessoa = await Pessoa.findOne({ nome: req.body.nome}).exec();
            return res.status(200).json(dadoPessoa);
    }

    async atualiza(req, res) {        
        // Model.update(conditions, update, [options], [callback])
        // update `multi`ple tasks from complete false to true

        // Todo.update({ name: /master/i }, { completed: true }, { multi: true }, callback);

        //Model.findOneAndUpdate([conditions], [update], [options], [callback])
        dadoPessoa = await Pessoa.findOneAndUpdate({name: /JS$/ }, {completed: false}, callback);



        /*

        dadoPessoa = await Pessoa.findOneAndUpdate({
            nome: req.body.nome
        }, req.body, { 
            upsert: false 
        }, function (err, doc) {
            if (err) {
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            res.status(201).json(req.body);
            res.end();
            return;
        });


        dadoPessoa = await Pessoa.findOneAndUpdate(
           {
               nome: req.body.nome
           },
           req.body, {
               upsert: true
           }, function (err, doc) {
               if (err) {
                   res.status(500).json({ error: err.message });
                   res.end();
                   return;
               }
               res.json(req.body);
               res.end();
           }
       )*/
    }

    async removeId (req, res) {
            dadoPessoa = await Pessoa.deleteOne({ idPessoa: req.body.idPessoa })
            return res.status(201).json(dadoPessoa);       
    }
}

module.exports = new TreinamentoPessoaController();