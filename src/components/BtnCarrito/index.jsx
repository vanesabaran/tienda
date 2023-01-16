import styles from './btnCarrito.module.css';
import { useLocation } from "react-router-dom";

const BtnCarrito = ({agregarCarrito, eliminarCarrito, producto}) => {
  const path = useLocation().pathname
  return (
    <>
      {path === "/carrito" ? <button className={styles.buttonEliminarCarrito} onClick={() => eliminarCarrito(producto.id)}>Eliminar del carrito</button> : <button className={styles.buttonAgregarCarrito} onClick={() => agregarCarrito(producto.id)}>Añadir al carrito</button>}
    </>
  )
}

export default BtnCarrito