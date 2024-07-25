import React, { useEffect } from 'react';
import useCarpetasStore from '../../store/store';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Narbar';
import './CarpetasComponent.css';

const CarpetasComponent = () => {
  const { carpetas, fetchCarpetas, searchCarpetas, setSearchKeyword } =
    useCarpetasStore();

  useEffect(() => {
    fetchCarpetas();
  }, [fetchCarpetas]);

  const handleSearch = () => {
    searchCarpetas();
  };

  const truncateComment = (comment) => {
    const words = comment.split(' ');
    return words.slice(0, 3).join(' ');
  };

  return (
    <div className='carpetas-container'>
      <Navbar />
      <div className='header'>
        <div className='search-bar'>
          <input
            type='text'
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder='Buscar'
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        <Link to='/crear-carpeta' className='create-button'>
          <button>+ Crear Nota</button>
        </Link>
      </div>
      <div className='carpetas-grid'>
        {carpetas.map((carpeta, index) => (
          <div key={carpeta.id} className='carpeta-card'>
            <div className='lightning-icon'>⚡</div>{' '}
            <Link to={`/carpetas/${carpeta.id}`}>
              <h3 style={{ color: getColor(index) }}>{carpeta.name}</h3>
              <div className='gradient-box'>
                <p style={{ color: getColor(index) }}>
                  {truncateComment(carpeta.comment)}
                </p>
              </div>
              <button className='edit-button'>Ver Nota</button>{' '}
            </Link>
          </div>
        ))}
      </div>

      <footer>
        <div>Compañía</div>
        <div>Comunidad</div>
        <div>Enlaces útiles</div>
        <div>Acerca de</div>
        <div>Discord</div>
        <div>Ayuda</div>
        <div className='instagram-icon'>Instagram</div>
      </footer>
    </div>
  );
};

function getColor(index) {
  const colors = [
    '#00FFFF',
    '#FFFF00',
    '#FF0000',
    '#FF00FF',
    '#FFFFFF',
    '#FF00FF',
  ];
  return colors[index % colors.length];
}

export default CarpetasComponent;
