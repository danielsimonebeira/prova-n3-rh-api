const SalaEvento = require('../model/TreiamentoEvento');

let dadoEvento = '';

class TreinamentoEventoController {
    
    async adiciona(req, res, next) {
        dadoEvento = await SalaEvento.create(req.body);
        return res.status(200).json(dadoEvento);
    }

    async buscaTodos(req, res) {
        dadoEvento = await SalaEvento.find({});
        return res.status(200).json(dadoEvento);
    }

    async buscaId(req, res) {
        dadoEvento = await SalaEvento.findOne({ idSala: req.body.idSala }).exec();
        return res.status(200).json(dadoEvento);

    }

    async atualiza(req, res) {
        dadoEvento = await SalaEvento.findOneAndUpdate({
            nome: req.body.nomeSala
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
        dadoEvento = await SalaEvento.deleteOne({ idSala: req.body.idSala })
        return res.status(201).json(dadoEvento);
    }
}

module.exports = new TreinamentoEventoController();