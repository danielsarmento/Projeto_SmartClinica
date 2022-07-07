const mongoose = require('mongoose');

const Estrutura = new mongoose.Schema({
    convenio: {type: String, required: true}
});

const cadastroConvenio = mongoose.model('Convenios', Estrutura);

module.exports = cadastroConvenio;