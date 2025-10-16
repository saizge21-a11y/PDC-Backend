import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
const Municipio = db.define('municipio', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departamentos',
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'municipios',
    timestamps: false
});
export default Municipio;
//# sourceMappingURL=municipio.js.map