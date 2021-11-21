const express = require('express');


const routes = express.Router();
const TreinamentoController = require('./app/controller/TreinamentoController');

routes.get('/', function(req, res) {
    res.status(200).send({
        title: 'TreinamentoAPI',
        version: '1.0.0'
    })
});


routes.post('/api/v1/treinamento', TreinamentoController.adiciona);

routes.get('/api/v1/treinamento', TreinamentoController.buscaTodos);

routes.put('/api/v1/treinamento/:nome', TreinamentoController.atualiza);

routes.delete('/api/v1/treinamento/:idPessoa', TreinamentoController.removeId);


module.exports = routes;