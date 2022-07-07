const cadastroExames = require('../../models/modelExames');

exports.consultarExames = async (req, res) => {
    try{
        const exames = await cadastroExames.find();
        res.send(exames);
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}