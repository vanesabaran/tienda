import { Link } from "react-router-dom";
import { convertirPrimerLetraMayuscula } from "../../utils/functions";
import styles from "./btnCategorias.module.css";

const BtnCategorias = ({ categorias }) => {
  return (
    <div className={styles.container}>
      {categorias.map((categoria, i) => (
        <Link to={`/categoria/${categoria}`} key={i}>
          <button className={styles.btnCategorias} >
            {convertirPrimerLetraMayuscula(categoria)}
          </button>
         </Link>
      ))}
    </div>
  );
};

export default BtnCategorias;
