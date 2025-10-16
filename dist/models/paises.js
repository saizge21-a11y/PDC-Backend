import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
const Pais = db.define('pais', {
    nombre: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'paises',
    timestamps: false
});
export default Pais;
//# sourceMappingURL=paises.js.map