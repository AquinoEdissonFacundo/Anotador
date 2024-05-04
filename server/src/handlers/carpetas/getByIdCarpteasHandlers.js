const getCarpetaById = require('../../controllers/carpetas/GetByIdCarpetas');
const { Router } = require('express');

const carpetasRouter = Router();

// Ruta para obtener una carpeta por su ID
carpetasRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const carpeta = await getCarpetaById(id);
    res.status(200).json(carpeta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports.carpetasRouter = carpetasRouter;
