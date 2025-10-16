import Departamento from '../models/departamento.js';
export const getDepartamentos = async (req, res) => {
    const listDepartamento = await Departamento.findAll();
    res.json({
        listDepartamento
    });
};
export const getDepartamento = async (req, res) => {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);
    if (departamento) {
        res.json(departamento);
    }
    else {
        res.status(404).json({
            msg: `No existe un Departamento con el id ${id}`
        });
    }
};
export const deleteDepartamento = async (req, res) => {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);
    if (!departamento) {
        return res.status(404).json({
            msg: `No existe un Departamento con el id ${id}`
        });
    }
    else {
        await departamento.destroy();
        res.json({
            msg: 'El Departamento fue eliminado con éxito'
        });
    }
};
export const postDepartamento = async (req, res) => {
    const { body } = req;
    try {
        await Departamento.create(body);
        res.json({
            msg: 'El Departamento fue creado con éxito',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        });
    }
};
export const putDepartamento = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);
    try {
        if (departamento) {
            await departamento.update(body, { where: { id } });
            res.json({
                msg: 'El Departamento fue actualizado con éxito',
                departamento
            });
        }
        else {
            return res.status(404).json({
                msg: `No existe un Departamento con el id ${id}`
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
//# sourceMappingURL=departamento.js.map