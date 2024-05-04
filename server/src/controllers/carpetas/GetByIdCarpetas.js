const { Carpetas } = require('../../db');

const getCarpetaById = async (id) => {
  const carpeta = await Carpetas.findByPk(id);
  if (!carpeta) throw new Error(`No se encontró la carpeta con el ID ${id}.`);
  return carpeta;
};
module.exports.getCarpetaById = getCarpetaById;
