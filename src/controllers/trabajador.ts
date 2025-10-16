import type { Request, Response } from 'express';
import Trabajador from '../models/trabajador.js';
import Empresa from '../models/empresa.js';

export const getTrabajadores = async (req:Request, res:Response) => {
  try {
    const listTrabajador = await Trabajador.findAll({
      include: [
        {
          model: Empresa,
          as: "empresas", 
          attributes: ["id", "nombre_comercial"], 
          through: { attributes: [] } 
        }
      ]
    });

    res.json(listTrabajador);

  } catch (error) {
    console.error("Error obteniendo trabajadores:", error);
    res.status(500).json({ message: "Error al obtener trabajadores" });
  }
};


export const getTrabajador = async (req: Request, res:Response) => {
    const {id} = req.params;
    const trabajador = await Trabajador.findByPk(id);

    if(trabajador){
        res.json(trabajador)
    } else{
        res.status(404).json({
            msg: `No existe un Trabajador con el id ${id}`
        })
    }

}
export const deleteTrabajador = async (req: Request, res:Response) => {
    const {id} = req.params;
    const trabajador = await Trabajador.findByPk(id);
if(!trabajador){
    return res.status(404).json({
        msg: `No existe un Trabajador con el id ${id}`
    })
} else{
    await trabajador.destroy();
    res.json({
        msg: 'El Trabajador fue eliminado con éxito'
    })
}
}
export const postTrabajador = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const empresa = await Empresa.findByPk(body.id_empresa);
    if (!empresa) {
      return res.status(400).json({
        msg: 'La empresa seleccionada no existe',
      });
    }

    const nuevoTrabajador = await Trabajador.create({
      nombre_completo: body.nombre_completo,
      edad: body.edad,
      telefono: body.telefono,
      correo_electronico: body.correo_electronico,
      id_pais: body.id_pais,
      id_departamento: body.id_departamento,
      id_municipio: body.id_municipio,
      id_empresa: body.id_empresa, 
    });

    await nuevoTrabajador.addEmpresa(empresa);

    const trabajadorConEmpresa = await Trabajador.findByPk(nuevoTrabajador.id, {
      include: [
        {
          model: Empresa,
          as: 'empresas',
          attributes: ['id', 'nombre_comercial'],
          through: { attributes: [] },
        },
      ],
    });

    res.json({
      msg: 'El Trabajador fue creado y asignado correctamente a la empresa',
      trabajador: trabajadorConEmpresa,
    });

  } catch (error) {
    console.error('Error al crear trabajador:', error);
    res.status(500).json({
      msg: 'Ups ocurrió un error, hable con el administrador',
    });
  }
};


export const putTrabajador = async (req: Request, res:Response) => {
    const {body} = req;
    const {id} = req.params;
    const trabajador = await Trabajador.findByPk(id);

    try{
        if(trabajador){
       await trabajador.update(body, {where: {id}})
       res.json({
        msg: 'El Trabajador fue actualizado con éxito',
        trabajador
       })
    } else{
         return res.status(404).json({
            msg: `No existe un Trabajador con el id ${id}`
        })
    }
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        })
    }
    
}