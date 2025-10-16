import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
const Departamento = db.define('departamento', {
    nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_pais: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
    createdAt: false,
    updatedAt: false,
    tableName: 'departamentos',
    timestamps: false
});

export default Departamento;