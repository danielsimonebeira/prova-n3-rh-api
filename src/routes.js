const express = require('express');


const routes = express.Router();
const TreinamentoController = require('./app/controller/TreinamentoController');

routes.get('/', function(req, res) {
    res.status(200).send({
        title: 'TreinamentoAPI',
        version: '1.0.0'
    })
});

routes.get('/rh', TreinamentoController.index);

routes.post('/rh', TreinamentoController.store);


module.exports = routes;