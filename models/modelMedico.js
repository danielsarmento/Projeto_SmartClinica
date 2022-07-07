const mongoose = require('mongoose');

//Definindo o esquema dos dados no documento
const EstruturaDosDados = new mongoose.Schema({
    nome: {type: String, required: true},
    especialidade: {type: String, required: true},
});

// Criando Coleção no Projeto SmartClinica
const cadastroMedico = mongoose.model('CadastroDosMedicos', EstruturaDosDados);

// Exportando para o controller ter acesso
module.exports = cadastroMedico;