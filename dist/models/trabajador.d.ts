import { Model } from "sequelize";
import Empresa from "./empresa.js";
declare class Trabajador extends Model {
    id: number;
    nombre_completo: string;
    edad: number;
    telefono: string;
    correo_electronico: string;
    id_pais: number;
    id_departamento: number;
    id_municipio: number;
    addEmpresa: (empresa: typeof Empresa | any) => Promise<void>;
    getEmpresas: () => Promise<typeof Empresa[]>;
}
export default Trabajador;
//# sourceMappingURL=trabajador.d.ts.map