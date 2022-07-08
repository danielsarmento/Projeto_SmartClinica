const cadastroExames = require('../../models/modelExames');

exports.consultarExames = async (req, res) => {
    try{
        const exames = await cadastroExames.find();
        const examesOfertados = exames.map((obj, ind) => {
            return `${ind+1}. ${obj.nome} | Preço: R$${obj.valor}`;
        });
        res.json(examesOfertados);
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}