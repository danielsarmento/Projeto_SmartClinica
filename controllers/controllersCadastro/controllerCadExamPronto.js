const cadastroExamePronto = require('../../models/modelExamesProntos');

exports.cadastroExamePronto = async (req, res) => {
    const exame = req.body;

    if(!exame.codigo){
        return res.status(422).json({Msg: 'O código é Obrigatório'})
    }
    if(!exame.senha){
        return res.status(422).json({Msg: 'A senha é Obrigatória'})
    };
    if(!exame.link){
        return res.status(422).json({Msg: 'O link é Obrigatório'})
    };

    try{
        await cadastroExamePronto.create(exame)
            .then(() =>{
                res.send({Msg:'Exame cadastrado com sucesso!'})
            })

    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}