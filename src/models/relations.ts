import Empresa from "./empresa.js";
import Trabajador from "./trabajador.js";
import EmpresaTrabajador from "./empresa_trabajador.js";

Empresa.belongsToMany(Trabajador, {
  through: EmpresaTrabajador,
  as: 'trabajadores',
  foreignKey: 'id_empresa'
});

Trabajador.belongsToMany(Empresa, {
  through: EmpresaTrabajador,
  as: 'empresas',
  foreignKey: 'id_colaborador'
});