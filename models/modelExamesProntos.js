const mongoose = require('mongoose');

const EstruturaExamesProntos = new mongoose.Schema({
    codigo:{type: String, required: true},
    senha:{type: String, required: true},
    link:{type: String, required: false},
});

const cadastroExamePronto = mongoose.model('CadastroExamesProntos', EstruturaExamesProntos)

module.exports = cadastroExamePronto;