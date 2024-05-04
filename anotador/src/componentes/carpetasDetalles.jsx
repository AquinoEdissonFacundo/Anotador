// CarpetasDetalles.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCarpetasStore from '../../store/store';

const CarpetasDetalles = () => {
  const { id } = useParams();
  const { carpetas } = useCarpetasStore();
  const [carpeta, setCarpeta] = useState(null);

  useEffect(() => {
    const carpetaSeleccionada = carpetas.find((c) => c.id === id);
    setCarpeta(carpetaSeleccionada);
  }, [id, carpetas]);

  return (
    <div>
      {carpeta && (
        <div>
          <h2>{carpeta.name}</h2>
          <p>{carpeta.comment}</p>
        </div>
      )}
    </div>
  );
};

export default CarpetasDetalles;
