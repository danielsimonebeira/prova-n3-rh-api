const express = require('express');


const routes = express.Router();
const RhController = require('./app/controller/RhController');

// routes.get('/', function(req, res) {
//     return res.json({ meassage: "Minha primeira rota!" });
// });

routes.get('/rh', RhController.index);

routes.post('/rh', RhController.store);


module.exports = routes;