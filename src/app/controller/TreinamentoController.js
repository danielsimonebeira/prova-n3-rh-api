const Pessoa = require('../model/TreinamentoPessoa');
const SalaEvento = require('../model/TreiamentoEvento');


class TreinamentoController {
    async store(req, res) {
        const dadoPessoa = await Pessoa.create(req.body);
        // const dadoSalaEvento = await Pessoa.create(req.body);

        // return res.json(dadoPessoa, dadoSalaEvento);
        return res.json(dadoPessoa);
    }
    async index(req, res) {
        const dadoPessoa = await Pessoa.find({});
        // const dadoSalaEvento = await Pessoa.find({});

        // return res.json(dadoPessoa, dadoSalaEvento);
        return res.json(dadoPessoa);
    }
}


module.exports = new TreinamentoController();