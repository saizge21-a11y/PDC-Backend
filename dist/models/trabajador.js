import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection.js";
import Empresa from "./empresa.js";
class Trabajador extends Model {
}
Trabajador.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_completo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "trabajador",
    tableName: "trabajadores",
    timestamps: false,
});
export default Trabajador;
//# sourceMappingURL=trabajador.js.map