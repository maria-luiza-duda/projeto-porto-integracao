const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    id: {type : Number},
    name: {type : String},
    cpf: {type : Number},
    comprador: {type : Boolean},
},{
    versionKey: false
});

const clientes = mongoose.model('clientes', clientesSchema);

module.exports = clientes;