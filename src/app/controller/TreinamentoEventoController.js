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

    async buscaNome(req, res) {
        dadoEvento = await SalaEvento.findOne({ nome: new RegExp('^' + req.body.nome + '$', "i")}, function (err, doc) {
            if (err) { 
                console.log(err); 
            } else {
                return res.status(201).json(dadoEvento);
            }
        });
    }

    async atualiza(req, res) {
        dadoEvento = await SalaEvento.findOneAndUpdate({
            status: "yes",
            nome: req.body.SalaEvento.nomeSala
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
        dadoEvento = await SalaEvento.remove({ idSala: req.body.SalaEvento.idSala })
    }
}

module.exports = new TreinamentoEventoController();