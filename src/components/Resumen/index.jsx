import styles from "./resumen.module.css";
import { GrClose } from 'react-icons/gr';

const Resumen = () => {
  return (
    <div className={styles.contenido}>
      <h2 className={styles.tituloResumen}>Resumen del carrito:</h2>
      <div className={styles.tabla}>
        <div className={styles.informacion}>
          <span className={styles.cantidad}>1</span>
          <p className={styles.titulo}>Zapatos Nike</p>
          <span className={styles.precio}>$80</span>
        </div>
       |<GrClose className={styles.iconoCerrar} />
      </div>
      <div className={styles.total}>
        <h3>Total:</h3>
        <span className={styles.totalPagar}>$200</span>
      </div>
    </div>
  );
};

export default Resumen;
