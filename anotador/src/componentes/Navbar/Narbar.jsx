import React from 'react';
import styles from './navbar.module.css';
const Narbar = () => {
  return (
    <nav className={styles.navbarcontainer}>
      <img style={{ width: 80 }} src='logo.jpg' alt='logo' />
      <div className={styles.containerlinks}>
        <a href=''>Ayuda</a>
        <a href=''>Registrarte</a>
        <a href=''>Iniciar sesion</a>
      </div>
    </nav>
  );
};

export default Narbar;
