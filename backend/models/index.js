const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.ENVIRONMENT || 'development';
let config = require('../config/json/config.json')[env];
let db = {};
config.dialectOptions = {};
config.dialectOptions.typeCast = (field, next) => {
  if (field.type === 'DATETIME') {
    return field.string();
  }
  return next();
};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config,);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize
  .authenticate()
  .then(async () => {
    console.log('Database connection has been established successfully.');
    if (process.env.ENVIRONMENT !== 'prod') {
      await sequelize.sync({ alter:true });
    }
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    // const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    console.log("model==================>",model?.name);
    if (model?.name) {
    db[model.name] = model;
    }
  });

for (let i = Object.keys(db).length - 1; i >= 0; i--) {
  let modelName = Object.keys(db)[i];
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;




