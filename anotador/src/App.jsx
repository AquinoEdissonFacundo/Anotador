import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carpetas from './componentes/carpetas'; // Componente para mostrar las carpetas
import CarpetasDetalles from './componentes/carpetasDetalles'; // Importa el componente de detalles de carpeta
import FormCarpeta from './componentes/formCarpeta';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Carpetas />} />
        <Route path='/crear-carpeta' element={<FormCarpeta />} />
        <Route path='/carpetas/:id' element={<CarpetasDetalles />} />
      </Routes>
    </Router>
  );
}

export default App;
