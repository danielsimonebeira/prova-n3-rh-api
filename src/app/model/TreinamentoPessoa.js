const mongoose = require('mongoose');

const RhPessoaSchema = new mongoose.Schema(
    {
        pessoa: {
            idPessoa: {
                type: Number,
                required: true
            },
            nome: {
                type: String,
                required: true
            },
            sobrenome: {
                type: String,
                required: true
            },
            nuLotacao: {
                type: Number,
                required: true
            }
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model("RhPessoa", RhPessoaSchema);