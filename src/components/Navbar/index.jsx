import styles from './navbar.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { convertirPrimerLetraMayuscula } from '../../utils/functions';

const Navbar = ({cantidad, categorias, setCategoriaSeleccionada}) => {
  const navigate = useNavigate();

  const navegarA = (e) => {
    // e.target.value guarda el valor del option}
    const categoria = e.target.value 
    setCategoriaSeleccionada(categoria)
    navigate(`/categoria/${categoria}`);
  }

  return (
    <nav className={styles.navbar}>
        <div className={styles.box}>
          <Link to="home">Inicio</Link>
          <Link to="favoritos">Favoritos</Link>
          <div>
            <select name="categorias" id="categorias" className={styles.categorias} onChange={navegarA}>
              <option value="DEFAULT">Categorias</option>
              {categorias.map((categoria, i) => {
                return ( 
                  <option value={categoria} key={i}>{convertirPrimerLetraMayuscula(categoria)}</option>
                )
              })}
            </select>
          </div>
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