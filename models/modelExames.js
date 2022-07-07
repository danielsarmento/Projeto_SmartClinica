const mongoose = require('mongoose');

const EstruturaExames = new mongoose.Schema({
    nome:{type: String, required: true},
    valor:{type: String, required: true},
});

const cadastroExames = mongoose.model('CadastroDeExames', EstruturaExames);

module.exports = cadastroExames;