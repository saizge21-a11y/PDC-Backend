import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
const Empresa = db.define('empresa', {
    nit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    razon_social: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre_comercial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    id_pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'paises',
            key: 'id'
        }
    }, 
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departamentos',
            key: 'id'
        }
    },
    id_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'municipios',
            key: 'id'
        }
    }
},
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'empresas',
        timestamps: false
    });

export default Empresa;