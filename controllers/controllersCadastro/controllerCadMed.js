const cadastroMedico = require('../../models/modelMedico')

exports.cadastro = async (req, res) => {
    const medico = req.body;
    
    if(!medico.nome){
        return res.status(422).json({Msg: 'O Nome é Obrigatório'})
    }
    if(!medico.especialidade){
        return res.status(422).json({Msg: 'A especialidade é Obrigatória'})
    };
    
    try{
        await cadastroMedico.create(medico)
            .then(() => {
                res.send({Msg: 'Médico cadastrado com sucesso!'})
            })
        
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
    
}