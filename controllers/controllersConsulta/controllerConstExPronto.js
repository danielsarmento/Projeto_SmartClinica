//Importando Collection dos Exames
const cadastroExamePronto = require('../../models/modelExamesProntos')

exports.consultarExPronto = async (req, res) => {
    const {codigo, senha} = req.body;
    
    // validação
    if(!codigo){
        return res.status(422).json({msg: 'O codigo é obrigatório!'})
    }
    if(!senha){
        return res.status(422).json({msg: 'A senha é obrigatória!'})
    }
    
    try{
    // Verificando se exame Existe
        const exame = await cadastroExamePronto.findOne({codido: codigo });

        if(!exame) {
            return res.status(404).json({msg: 'Exame não encontrado!'})
        }

        res.json(exame.link);   

    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}