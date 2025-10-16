import type { Request, Response } from 'express';
import EmpresaColaborador from '../models/empresa_trabajador.js';
import Empresa from '../models/empresa.js';
import Trabajador from '../models/trabajador.js';

export const getEmpresasPorTrabajador = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const trabajador = await Trabajador.findByPk(id, {
      include: [
        {
          model: Empresa,
          as: "empresas", 
          attributes: ["id", "nombre_comercial"],
          through: { attributes: [] }
        }
      ]
    });

    if (!trabajador) return res.status(404).json({ message: "Trabajador no encontrado" });
    res.json(trabajador);
  } catch (error) {
    console.error("Error en getEmpresasPorTrabajador:", error);
    res.status(500).json({ message: "Error al obtener empresas del trabajador" });
  }
};


export const asignarEmpresas = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const { empresasIds } = req.body; 

  try {
    const trabajador = await Trabajador.findByPk(id);
    if (!trabajador) {
      return res.status(404).json({ msg: `No existe el trabajador con id ${id}` });
    }

    await EmpresaColaborador.destroy({ where: { id_colaborador: id } }); 
    const registros = empresasIds.map((id_empresa: number) => ({
      id_empresa,
      id_colaborador: id
    }));

    await EmpresaColaborador.bulkCreate(registros);

    res.json({ msg: 'Empresas asignadas correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error al asignar empresas' });
  }
};
