const getAllCarpetas = require('../../controllers/carpetas/getAllCarpetas');
// const getProductById = require('../../controllers/product/getProductById');
// const getProductByName = require('../../controllers/carpetas/getCarpetasctByName');

const getAllCarpetasHandler = async (req, res) => {
  const { keyword } = req.query; // Obtener la palabra clave de la consulta

  try {
    const carpetas = await getAllCarpetas(keyword);
    return res.status(200).json(carpetas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getAllCarpetasHandler;

// Handler Buscar por ID
// const getProductByIdHandler = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const products = await getProductById(id);
//     return res.status(200).json(products);
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAllCarpetasHandler,
//   // getProductByIdHandler,
// };
