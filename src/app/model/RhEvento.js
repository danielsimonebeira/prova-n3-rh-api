const mongoose = require('mongoose');

const RhEventoSchema = new mongoose.Schema(
    {
        evento: {
            idSala: {
                type: Number,
                required: true
            },
            nomeSala: {
                type: String,
                required: true
            },
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model("RhEvento", RhEventoSchema);