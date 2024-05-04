// const notasController = require('../../controllers/notas/postNotas');

// const createNotaForCarpetasHandler = async (req, res) => {
//   const { carpetaId } = req.params;
//   const { comment } = req.body;
//   try {
//     const nuevaNota = await notasController.createNotaForCarpetas(
//       carpetaId,
//       comment
//     );
//     return res.status(201).json(nuevaNota);
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// };

// module.exports = createNotaForCarpetasHandler;
