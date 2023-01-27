import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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

console.log("PRODUCTOS", productos);
  return (
    <div className={styles.container}>
      {productos.length > 0 ? (<div className={styles.item}>
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
      </div>) : <h2>{path === "/favoritos" && "No se encuentra los productos en favoritos."} {path === "/carrito" && "No se encuentra los productos en el carrito."} {path === "/home" && "No hay productos para mostrar"}</h2>}
      
   
       {path === "/carrito" && <Resumen /> }
    </div>
  );
};

export default ProductList;
