import Sequelize from 'sequelize';
// var env = process.env.NODE_ENV || 'development';
import config from '../config/config';

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = {
  user: sequelize.import('./user'),
  meal: sequelize.import('./meal'),
  menu: sequelize.import('./menu'),
  order: sequelize.import('./order'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
