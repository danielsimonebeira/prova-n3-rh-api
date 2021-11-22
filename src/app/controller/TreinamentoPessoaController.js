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
        dadoPessoa = await Pessoa.findOne({ nome: new RegExp('^' + req.body.nome + '$', "i")}, function (err, doc) {
            if (err) { 
                console.log(err); 
            } else {
                return res.status(201).json(dadoPessoa);
            }
        });
    }

    async atualiza(req, res) {

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
        dadoPessoa = await Pessoa.deleteOne({ idPessoa: req.body.Pessoa.idPessoa }, function ( err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    }
}

module.exports = new TreinamentoPessoaController();