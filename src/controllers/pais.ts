import type { Request, Response } from 'express';
import Pais from '../models/paises.js';
import Empresa from "../models/empresa.js"; 

export const getPaises = async (req: Request, res:Response) => {
    const listPais = await Pais.findAll();

   res.json({
    listPais
   })
}

export const getPais = async (req: Request, res:Response) => {
    const {id} = req.params;
    const pais = await Pais.findByPk(id);

    if(pais){
        res.json(pais)
    } else{
        res.status(404).json({
            msg: `No existe un País con el id ${id}`
        })
    }

}
export const deletePais = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const pais = await Pais.findByPk(id);
    if (!pais) return res.status(404).json({ message: "País no encontrado" });

    const empresas = await Empresa.findOne({ where: { id_pais: id } });
    if (empresas) {
      return res.status(400).json({
        message: "No se puede eliminar el país, tiene empresas asociadas.",
      });
    }

    await pais.destroy();
    res.json({ message: "País eliminado correctamente" });
  } catch (error) {
    console.error("Error eliminando país:", error);
    res.status(500).json({ message: "Error al eliminar país" });
  }
};

export const postPais = async (req: Request, res:Response) => {
    const {body} = req;
    try{
await Pais.create(body);
    res.json({
        msg: 'El Pais fue creado con éxito',
    })
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        })
    }
    
}

export const putPais = async (req: Request, res:Response) => {
    const {body} = req;
    const {id} = req.params;
    const pais = await Pais.findByPk(id);

    try{
        if(pais){
       await pais.update(body, {where: {id}})
       res.json({
        msg: 'El País fue actualizado con éxito',
        pais
       })
    } else{
         return res.status(404).json({
            msg: `No existe un País con el id ${id}`
        })
    }
    } catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Ups ocurrió un error, hable con el administrador'
        })
    }
    
}