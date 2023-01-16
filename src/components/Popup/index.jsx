import {AiOutlineClose} from 'react-icons/ai'
import styles from './popup.module.css'

const Popup = ({pregunta, setShow}) => {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.cerrar}>
        <AiOutlineClose onClick={() => setShow(false)}/>
      </div>
      <div className={styles.texto}>
        <p>Texto</p>
      </div>
      <div className={styles.boton}>
        <button>Aceptar</button>
        <button>Cancelar</button>
      </div>
    </div>
  )
}

export default Popup