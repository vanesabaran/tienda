import {AiOutlineClose} from 'react-icons/ai'
import { guardarSiglaPopUp, reducirStringPopUp } from '../../utils/functions'
import styles from './popup.module.css'

const Popup = ({aceptar, pregunta, setShow}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <p className={styles.texto}>{reducirStringPopUp(pregunta)}</p>
        <div className={styles.boton}>
          <button className={styles.aceptar} onClick={() => aceptar(guardarSiglaPopUp(pregunta))}>Aceptar</button>
          <button className={styles.cancelar} onClick={() => setShow(false)}>Cancelar</button>
        </div>
        <div className={styles.cerrar}>
          <AiOutlineClose onClick={() => setShow(false)}/>
        </div>
      </div>
    </div>
  )
}

export default Popup