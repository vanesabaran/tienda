import BtnFavoritos from "../BtnFavoritos";
import BtnCarrito from "../BtnCarrito";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  producto,
  agregarCarrito,
  agregarFavorito,
  eliminarCarrito,
  eliminarFavorito,
  mostrarVentana
}) => {
  

  return (
      // <Link to={`/productos/${producto.id}`} className={styles.card}>
          <div className={styles.container}>
            <div className={`${styles.centerContainer} ${styles.image}`}>
              <img src={producto.image} />
            </div>
            <div className={styles.titulo}>
            <h2>{producto.title}</h2>
            </div>
            { producto.description.length <= 81 ? <p className={styles.description}>{producto.description}</p> : <p className={styles.description}>{producto.description.slice(0, 81).concat("...")}</p>}
            <p className={styles.price}>${producto.price}</p>
            <div className={styles.centerContainer}>

            <BtnCarrito
              agregarCarrito={agregarCarrito}
              mostrarVentana={mostrarVentana}
              eliminarCarrito={eliminarCarrito}
              producto={producto}
              />

            <BtnFavoritos
              agregarFavorito={agregarFavorito}
              mostrarVentana={mostrarVentana}
              eliminarFavorito={eliminarFavorito}
              producto={producto}
              />
              </div>
          </div>
        // </Link>
  );
};

export default Card;
