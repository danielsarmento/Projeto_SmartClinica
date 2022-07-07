const routes = require('express').Router();
// Importando Controllers de Cadastro no DB
const controllerCadMed = require('../controllers/controllersCadastro/controllerCadMed');
const controllerCadExamPronto = require('../controllers/controllersCadastro/controllerCadExamPronto');
const controllerCadExames = require('../controllers/controllersCadastro/controllerCadExames');
const controllerCadConvenio = require('../controllers/controllersCadastro/controllerCadConvenio');

// Importando Controllers de Consultas na API
const controllerConstMed = require('../controllers/controllersConsulta/controllerConsltMed');
const controllerConstExPronto = require('../controllers/controllersConsulta/controllerConstExPronto');
const controllerConstExames = require('../controllers/controllersConsulta/controllerConstExames');
const controllerConstConv = require('../controllers/controllersConsulta/controllerConstConv');

// Rotas de Cadastro
routes.post('/cadastroMedicos', controllerCadMed.cadastro);
routes.post('/cadastroExamePronto', controllerCadExamPronto.cadastroExamePronto)
routes.post('/cadastroExame', controllerCadExames.cadastroExame);
routes.post('/cadastroConvenio', controllerCadConvenio.cadastroConvenio);

// Rotas de Consulta
routes.get('/consultarMedicos', controllerConstMed.consultarMedicos);
routes.get('/consultarEspecialidades/:especialidade', controllerConstMed.consultarEspecialidades);
routes.get('/consultarExamesProntos/:codigo', controllerConstExPronto.consultarExPronto);
routes.get('/consultarExames', controllerConstExames.consultarExames);
routes.get('/consultarConvenio', controllerConstConv.consultarConvenios);

module.exports = routes;