const { Carpetas } = require('../../db');
const { Op } = require('sequelize');

const getAllCarpetasController = async (keyword) => {
  let carpetas;

  if (keyword) {
    // Si hay una palabra clave, realizar búsqueda
    carpetas = await Carpetas.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            comment: {
              [Op.like]: `%${keyword}%`,
            },
          },
        ],
      },
    });
  } else {
    // De lo contrario, obtener todas las carpetas
    carpetas = await Carpetas.findAll();
  }

  return carpetas;
};

module.exports = getAllCarpetasController;
