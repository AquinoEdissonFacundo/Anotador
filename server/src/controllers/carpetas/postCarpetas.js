const { Carpetas } = require('../../db');

const postCarpetas = async (name, comment) => {
  const newCarpetas = await Carpetas.create({
    name,
    comment,
  });

  if (!newCarpetas) throw new Error(`La carpeta ${name} no pudo crearse.`);
  return `La carpeta ${name} se creó exitosamente.`;
};

module.exports = postCarpetas;
