const cadastroExames = require('../../models/modelExames');

exports.cadastroExame = async (req, res) => {
    const exames = req.body;
    
    if(!exames.nome){
        return res.status(422).json({Msg: 'O nome é Obrigatório'})
    }
    if(!exames.valor){
        return res.status(422).json({Msg: 'O valor é Obrigatório'})
    }

    try{
        await cadastroExames.create(exames)
            .then(() =>{
                res.send({Msg:'Exame cadastrado com sucesso!'})
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
    
};