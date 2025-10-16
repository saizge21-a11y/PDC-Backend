import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
import Empresa from './empresa.js';
import Trabajador from './trabajador.js';


const EmpresaTrabajador = db.define('empresa_colaborador', {
  id_empresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Empresa,
      key: 'id'
    },
    primaryKey: true
  },
  id_colaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Trabajador,
      key: 'id'
    },
    primaryKey: true
  }
}, {
  tableName: 'empresa_colaborador',
  timestamps: false
});

export default EmpresaTrabajador;
