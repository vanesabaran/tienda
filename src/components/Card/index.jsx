import BtnFavoritos from "../BtnFavoritos";
import BtnCarrito from "../BtnCarrito";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { convertirPrimerLetraMayuscula, reducirYConcatenar } from "../../utils/functions";

const Card = ({
  producto,
  eliminarCarrito,
  eliminarFavorito,
  mostrarVentana,
}) => {
  return (
  <Link to={`/productos/${producto.id}`} className={styles.card}>
    <div className={styles.container}>
      <div className={`${styles.centerContainer} ${styles.image}`}>
        <img src={producto.image} />
      </div>
      <div className={styles.titulo}>
        {producto.title.length <= 51 ? (
          <h2>{producto.title}</h2>
        ) : (
          <h2>{reducirYConcatenar(producto.title, 51)}</h2>
        )}
      </div>
      <h3>{convertirPrimerLetraMayuscula(producto.category)}</h3>
      {producto.description.length <= 81 ? (
        <p className={styles.description}>{producto.description}</p>
      ) : (
        <p className={styles.description}>
          {reducirYConcatenar(producto.description, 81)}
        </p>
      )}
      <p className={styles.price}>${producto.price}</p>
      <div className={styles.centerContainer}>
        <BtnCarrito
          mostrarVentana={mostrarVentana}
          eliminarCarrito={eliminarCarrito}
          producto={producto}
        />

        <BtnFavoritos
          mostrarVentana={mostrarVentana}
          eliminarFavorito={eliminarFavorito}
          producto={producto}
        />
      </div>
    </div>
    </Link>
  );
};

export default Card;
