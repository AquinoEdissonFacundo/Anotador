const postCarpetas = require('../../controllers/carpetas/postCarpetas');

const postCarpetasHandler = async (req, res) => {
  const { name, comment } = req.body;

  try {
    const createdCarpeta = await postCarpetas(name, comment);
    return res
      .status(201)
      .json({ id: createdCarpeta.id, message: createdCarpeta.message });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postCarpetasHandler;
