import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('pdc', 'root', 'mysql321!', {
  host: 'localhost',
   port: 3307,
  dialect: 'mysql'
});

export default sequelize;