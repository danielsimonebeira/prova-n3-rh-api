const express = require('express');

const routes = express.Router();
const TreinamentoPessoaController = require('./app/controller/TreinamentoPessoaController');
const TreinamentoEventoController = require('./app/controller/TreinamentoEventoController');

routes.get('/', function(req, res) {
    res.status(200).send({
        title: 'TreinamentoAPI',
        version: '1.0.0'
    })
});

routes.post('/api/v1/treinamento/pessoa', TreinamentoPessoaController.adiciona);
routes.get('/api/v1/treinamento/pessoa', TreinamentoPessoaController.buscaTodos);
routes.put('/api/v1/treinamento/pessoa/:nome', TreinamentoPessoaController.atualiza);
routes.delete('/api/v1/treinamento/pessoa/:idPessoa', TreinamentoPessoaController.removeId);

routes.post('/api/v1/treinamento/evento', TreinamentoEventoController.adiciona);
routes.get('/api/v1/treinamento/evento', TreinamentoEventoController.buscaTodos);
routes.put('/api/v1/treinamento/evento/:nome', TreinamentoEventoController.atualiza);
routes.delete('/api/v1/treinamento/evento/:idPessoa', TreinamentoEventoController.removeId);


module.exports = routes;