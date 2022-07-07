const cadastroConvenio = require('../../models/modelConvenio');

exports.consultarConvenios = async (req, res) => {
    try{
        const convenio = await cadastroConvenio.find();
        const convenios = convenio.map((obj, ind) => {
            return `${ind+1}. ${obj.convenio}`;
        });
        res.json(convenios);
    } catch(error) {
        res.status(500).json({Msg: "Aconteceu um erro no servidor, tente mais tarde!"})
    }
}