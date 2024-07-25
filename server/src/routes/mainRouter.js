const { Router } = require('express');
const getAllCarpetasHandler = require('../handlers/carpetas/getAllCarpetasHandler');
const postCarpetasHandler = require('../handlers/carpetas/postCarpetasHandler');
const searchCarpetasHandler = require('../handlers/carpetas/searchCarpetasHandler');

//////Notas//////

// const getAllNotasHandler = require('../handlers/notas/getAllNotasHandler');
// const postNotasHandler = require('../handlers/notas/postNotasHandler');
////////////

const mainRouter = Router();

// Agregar ruta para obtener todas las Carpetas
mainRouter.get('/', getAllCarpetasHandler);
mainRouter.get('/search', searchCarpetasHandler);
// Agregar ruta para obtener todas las Notas
// mainRouter.get('/notas', getAllNotasHandler);

// Agregar ruta para crear una nueva Carpeta
mainRouter.post('/', postCarpetasHandler);

// Agregar ruta para crear una nueva Nota en una Carpeta específica
// mainRouter.post('/notas/:carpetaId', postNotasHandler);

module.exports = mainRouter;
