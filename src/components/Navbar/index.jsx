import styles from './navbar.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = ({cantidad}) => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.box}>
          <Link to="home">Inicio</Link>
          <Link to="favoritos">Favoritos</Link>
        </div>
        <div className={styles.box}>
          <Link to="user">
            <FaUserAlt className={styles.user}/>
          </Link>
          <Link to="carrito">
            <div className={styles.box}>
              <FaShoppingCart className={styles.carrito}/>
              {cantidad != 0 && <p className={styles.cantidad}>{cantidad}</p>}
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar