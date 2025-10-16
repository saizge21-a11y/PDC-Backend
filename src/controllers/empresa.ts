import type { Request, Response } from 'express';
import Empresa from '../models/empresa.js';
export const getEmpresas = async (req: Request, res:Response) => {
    const listEmpresas = await Empresa.findAll();

   res.json({
    listEmpresas
   })
}

export const getEmpresa = async (req: Request, res:Response) => {
    const {id} = req.params;
    const empresa = await Empresa.findByPk(id);

    if(empresa){
        res.json(empresa)
    } else{
        res.status(404).json({
            msg: `No existe una Empresa con el id ${id}`
        })
    }

}
export const deleteEmpresa = async (req: Request, res:Response) => {
    const {id} = req.params;
    const empresa = await Empresa.findByPk(id);
if(!empresa){
    return res.status(404).json({
        msg: `No existe una Empresa con el id ${id}`
    })
} else{
    await empresa.destroy();
    res.json({
        msg: 'La Empresa fue eliminado con éxito'
    })
}
}
export const postEmpresa = async (req: Request, res:Response) => {
    const {body} = req;
    try{
await Empresa.create(body);
    res.json({
        msg: 'La Empresa fue creado con éxito',
    })
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        })
    }
    
}

export const putEmpresa = async (req: Request, res:Response) => {
    const {body} = req;
    const {id} = req.params;
    const empresa = await Empresa.findByPk(id);

    try{
        if(empresa){
       await empresa.update(body, {where: {id}})
       res.json({
        msg: 'La Empresa fue actualizado con éxito',
        empresa
       })
    } else{
         return res.status(404).json({
            msg: `No existe una Empresa con el id ${id}`
        })
    }
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        })
    }

    
    
}

export const getEmpresasByUbicacion = async (req:Request, res:Response) => {
  try {
    const { id_pais, id_departamento, id_municipio } = req.query;

    const whereClause: Record<string, any> = {};

    if (id_pais) whereClause.id_pais = id_pais;
    if (id_departamento) whereClause.id_departamento = id_departamento;
    if (id_municipio) whereClause.id_municipio = id_municipio;

    const empresas = await Empresa.findAll({
      where: whereClause,
      attributes: ["id", "nombre_comercial", "razon_social"],
    });

    res.json({ listEmpresas: empresas });
  } catch (error) {
    console.error("Error obteniendo empresas filtradas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};