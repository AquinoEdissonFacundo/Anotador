import React, { useState } from 'react';
import useCarpetasStore from '../../store/store';
import { useNavigate } from 'react-router-dom';

const FormCarpeta = () => {
  const [nombreCarpeta, setNombreCarpeta] = useState('');
  const [nota, setNota] = useState('');
  const { agregarCarpeta } = useCarpetasStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar que el nombre de la carpeta no esté vacío
    if (nombreCarpeta.trim() === '') {
      alert('El nombre de la carpeta no puede estar vacío');
      return;
    }

    // Enviar los datos al store para crear la carpeta
    agregarCarpeta({ name: nombreCarpeta, comment: nota });

    // Redirigir a la página de carpetas después de crear la carpeta
    navigate('/');
  };

  return (
    <div>
      <h2>Crear Carpeta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Carpeta:</label>
          <input
            type='text'
            value={nombreCarpeta}
            onChange={(e) => setNombreCarpeta(e.target.value)}
          />
        </div>
        <div>
          <label>Nota:</label>
          <textarea value={nota} onChange={(e) => setNota(e.target.value)} />
        </div>
        <button type='submit'>Crear Carpeta</button>
      </form>
    </div>
  );
};

export default FormCarpeta;
