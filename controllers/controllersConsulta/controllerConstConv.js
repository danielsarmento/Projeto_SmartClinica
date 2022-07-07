const cadastroConvenio = require('../../models/modelConvenio');

exports.consultarConvenios = async (req, res) => {
    try{
        const convenio = await cadastroConvenio.find();
        console.log(convenio)
        res.json({convenio});
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}