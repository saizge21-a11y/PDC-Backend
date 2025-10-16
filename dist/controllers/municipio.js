import Municipio from '../models/municipio.js';
export const getMunicipios = async (req, res) => {
    const listMunicipio = await Municipio.findAll();
    res.json({
        listMunicipio
    });
};
export const getMunicipio = async (req, res) => {
    const { id } = req.params;
    const municipio = await Municipio.findByPk(id);
    if (municipio) {
        res.json(municipio);
    }
    else {
        res.status(404).json({
            msg: `No existe un Municipio con el id ${id}`
        });
    }
};
export const deleteMunicipio = async (req, res) => {
    const { id } = req.params;
    const municipio = await Municipio.findByPk(id);
    if (!municipio) {
        return res.status(404).json({
            msg: `No existe un Municipio con el id ${id}`
        });
    }
    else {
        await municipio.destroy();
        res.json({
            msg: 'El Municipio fue eliminado con éxito'
        });
    }
};
export const postMunicipio = async (req, res) => {
    const { body } = req;
    try {
        await Municipio.create(body);
        res.json({
            msg: 'El Municipio fue creado con éxito',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        });
    }
};
export const putMunicipio = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const municipio = await Municipio.findByPk(id);
    try {
        if (municipio) {
            await municipio.update(body, { where: { id } });
            res.json({
                msg: 'El Municipio fue actualizado con éxito',
                municipio
            });
        }
        else {
            return res.status(404).json({
                msg: `No existe un Municipio con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        });
    }
};
//# sourceMappingURL=municipio.js.map