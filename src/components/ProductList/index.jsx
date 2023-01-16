import { useLocation } from "react-router-dom";
import Card from "../Card";
import Resumen from "../Resumen";
import styles from "./productList.module.css";

const ProductList = ({
  productos,
  agregarCarrito,
  agregarFavorito,
  eliminarCarrito,
  eliminarFavorito,
  mostrarVentana
}) => {
  const path = useLocation().pathname

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {productos.map((producto, i) => (
          <Card
            key={i}
            producto={producto}
            agregarCarrito={agregarCarrito}
            agregarFavorito={agregarFavorito}
            eliminarCarrito={eliminarCarrito}
            eliminarFavorito={eliminarFavorito}
            mostrarVentana={mostrarVentana}
          />
        ))}
      </div>
       {path === "/carrito" && <Resumen /> }
    </div>
  );
};

export default ProductList;
