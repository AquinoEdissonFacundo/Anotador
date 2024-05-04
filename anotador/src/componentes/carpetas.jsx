import React, { useEffect } from 'react';
import useCarpetasStore from '../../store/store'; // Importa el store de Zustand
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Navbar from './Navbar/Narbar';
const CarpetasComponent = () => {
  const { carpetas, fetchCarpetas, searchCarpetas, setSearchKeyword } =
    useCarpetasStore();

  useEffect(() => {
    fetchCarpetas(); // Cargar carpetas al montar el componente
  }, [fetchCarpetas]);

  const handleSearch = () => {
    searchCarpetas(); // Realizar búsqueda cuando cambia la palabra clave de búsqueda
  };

  // Función para recortar el comentario y mostrar solo las primeras 5 palabras
  const truncateComment = (comment) => {
    const words = comment.split(' ');
    return words.slice(0, 5).join(' ');
  };

  return (
    <div>
      <Navbar></Navbar>

      <input type='text' onChange={(e) => setSearchKeyword(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {carpetas.map((carpeta) => (
          <li key={carpeta.id}>
            <div>
              {/*Link para vincular el nombre de la carpeta a la ruta de detalles */}
              <Link to={`/carpetas/${carpeta.id}`}>
                <h3>{carpeta.name}</h3>
              </Link>
              {/* Muestra las primeras 5 palabras del comentario */}
              <p>{truncateComment(carpeta.comment)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarpetasComponent;
