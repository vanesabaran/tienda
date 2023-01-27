import styles from './btnCarrito.module.css';
import { useLocation } from "react-router-dom";

const BtnCarrito = ({mostrarVentana, producto}) => {
  const path = useLocation().pathname
  return (
    <>
      {path === "/carrito" ? <button className={styles.buttonEliminarCarrito} onClick={() => mostrarVentana("¿Estás seguro que queres eliminar del carrito? EC", producto.id)}>Eliminar del carrito</button> : <button className={styles.buttonAgregarCarrito} onClick={() => mostrarVentana("Queres añadir al carrito? AC", producto.id)}>Añadir al carrito</button>}
    </>
  )
}

export default BtnCarrito