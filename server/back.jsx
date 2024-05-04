// // Importar los módulos necesarios
// const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');

// // Configurar Sequelize para la base de datos
// const sequelize = new Sequelize('anotador', 'postgres', '12345', {
//   dialect: 'postgres',
//   host: 'localhost',
// });

// // Definir el modelo de la tabla Carpetas
// const Carpeta = sequelize.define('Carpeta', {
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   texto: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
// });

// // Sincronizar el modelo con la base de datos
// (async () => {
//   await sequelize.sync();
//   console.log('Modelo sincronizado con la base de datos');
// })();

// // Configurar Express
// const app = express();
// const PORT = 3001;

// app.use(express.json());

// // Ruta para obtener todas las carpetas
// app.get('/api/carpetas', async (req, res) => {
//   try {
//     const carpetas = await Carpeta.findAll();
//     res.status(200).json(carpetas);
//   } catch (error) {
//     console.error('Error al obtener carpetas:', error);
//     res.status(500).json({ message: 'Error al obtener carpetas' });
//   }
// });

// // Ruta para crear una nueva carpeta
// app.post('/api/carpetas', async (req, res) => {
//   const { nombre, texto } = req.body;
//   try {
//     const nuevaCarpeta = await Carpeta.create({ nombre, texto });
//     res.status(201).json(nuevaCarpeta);
//   } catch (error) {
//     console.error('Error al crear la carpeta:', error);
//     res.status(500).json({ message: 'Error al crear la carpeta' });
//   }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en el puerto ${PORT}`);
// });
