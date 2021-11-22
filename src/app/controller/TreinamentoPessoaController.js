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

    async atualiza(req, res) {
        dadoPessoa = await Pessoa.findOneAndUpdate({
            status: "yes",
            nome: req.body.Pessoa.nome
        }, function (err, resultado) {
            if (err) {
                return res.status(500).send('Ocorreu uma quebra!');
            }

            if (resultado.hasOwnProperty("value") && resultado.value !== null) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
    }

    async removeId (req, res) {
        dadoPessoa = await Pessoa.remove({ idPessoa: req.body.Pessoa.idPessoa })
    }
}

module.exports = new TreinamentoPessoaController();