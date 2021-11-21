const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');


class App {
    constructor() {
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(process.env.PORT, () => {
            console.log('API REST funcionando na porta', process.env.PORT);
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
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        // this.express.use(express.json());
        this.express.use(bodyParser.json());
        this.express.use(cors());

    }

    routes() {
        this.express.use(routes);
    }
}
module.exports = new App().express;