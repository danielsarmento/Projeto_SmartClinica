//Importando Collection dos médicos
const cadastroMedico = require('../../models/modelMedico')

exports.consultarMedicos = async (req, res) => {
    try{
        const todosMedicos = await cadastroMedico.find();
        const nomesMedicos = todosMedicos.map((obj, ind) => {
            return `${ind+1}. ${obj.nome}`;
        });
        res.json(nomesMedicos);

    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}

exports.consultarEspecialidades = async (req, res) => {
    const especialidade = req.params.especialidade;
    try{
        const medEsp = await cadastroMedico.find({especialidade: especialidade })
        res.json(medEsp);
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
    
}