//Importando Collection dos Exames
const cadastroExamePronto = require('../../models/modelExamesProntos')

exports.consultarExPronto = async (req, res) => {
    try{
        const cod = req.params.codigo;
        const exame = await cadastroExamePronto.find({codigo: cod});
        res.json(exame);    
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}