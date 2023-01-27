import styles from './btnFavoritos.module.css';
import { useLocation } from "react-router-dom";

const BtnFavoritos = ({mostrarVentana, producto}) => {
  const path = useLocation().pathname
  return (
    <>
    { path === "/favoritos" ? <button className={styles.buttonEliminarFavorito} onClick={() => mostrarVentana("¿Estás seguro que queres eliminar de los favoritos? EF", producto.id)}>Eliminar de favoritos</button> : <button className={styles.buttonAgregarFavorito} onClick={() => mostrarVentana("Queres añadir a favoritos? AF", producto.id)}>Añadir a favoritos</button>}
    </>
    )
}

export default BtnFavoritos