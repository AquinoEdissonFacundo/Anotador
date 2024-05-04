const getAllCarpetasController = require('../../controllers/carpetas/getSearchCarpetas');

const getAllCarpetasHandler = async (req, res) => {
  const { keyword } = req.query; // Obtener la palabra clave de la consulta

  try {
    const carpetas = await getAllCarpetasController(keyword);
    return res.status(200).json(carpetas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getAllCarpetasHandler;
