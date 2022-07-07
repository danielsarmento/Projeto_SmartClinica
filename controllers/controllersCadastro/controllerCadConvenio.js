const cadastroConvenio = require('../../models/modelConvenio');

exports.cadastroConvenio = async (req, res) => {
    const convenios = req.body;

    if(!convenios){
        res.status(422).json({Msg: 'O Nome do convênio é obrigatório'});
    }
    try{
        await cadastroConvenio.create(convenios)
            .then(() => {
                res.send({Msg: 'Convênio cadastrado com sucesso!'})
            })
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}