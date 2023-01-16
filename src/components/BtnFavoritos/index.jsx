import styles from './btnFavoritos.module.css';
import { useLocation } from "react-router-dom";

const BtnFavoritos = ({texto, agregarFavorito, eliminarFavorito, mostrarVentana, producto}) => {
  const path = useLocation().pathname
  return (
    <>
    { path === "/favoritos" ? <button className={styles.buttonEliminarFavorito} onClick={() => eliminarFavorito(producto.id)}>Eliminar de favoritos</button> : <button className={styles.buttonAgregarFavorito} onClick={mostrarVentana}>Añadir a favoritos</button>}
    </>
    )
}

export default BtnFavoritos