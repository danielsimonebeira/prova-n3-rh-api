const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes');


class App {
    constructor() {
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(3001, () => {
            console.log('API REST funcionando na porta 3001');
        });
    }

    database() {
        mongoose.connect(process.env.MONGO_CONECTA_STRING, { 
            maxPoolSize: 50,
            wtimeoutMS: 2500,
            useNewUrlParser:true
        }).catch(err => {
            console.log('=====_LOG DE ERRO_=====');
            console.error(err.stack);
        });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(routes);
    }
}
module.exports = new App().express;