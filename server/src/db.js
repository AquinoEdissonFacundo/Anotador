const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// Obtén las variables del entorno
require('dotenv').config();
const { DB_HOST } = process.env;

const sequelize = new Sequelize(DB_HOST, {
  logging: false,
  native: false,
});

// Cargar modelos
const modelDefiners = [];
const modelsPath = path.join(__dirname, 'models');

fs.readdirSync(modelsPath)
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    const modelPath = path.join(modelsPath, file);
    const modelDefiner = require(modelPath);
    modelDefiners.push(modelDefiner);
  });

// Inyectar la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizar los nombres de los modelos (opcional)
const modelsEntries = Object.entries(sequelize.models);
const capitalizedModels = modelsEntries.map(([modelName, model]) => [
  modelName.charAt(0).toUpperCase() + modelName.slice(1),
  model,
]);
sequelize.models = Object.fromEntries(capitalizedModels);

// Definir relaciones
const { Carpetas } = sequelize.models;

// Relaciones
//agregar relaciones aquí si las carpetas tienen relaciones con otros modelos

// Sincronizar con la base de datos
sequelize.sync();
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
