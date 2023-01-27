import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from "./cardIndividual.module.css"
import BtnCarrito from '../BtnCarrito'
import BtnFavoritos from '../BtnFavoritos'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import { convertirPrimerLetraMayuscula } from '../../utils/functions'

const CardIndividual = ({mostrarVentana, agregarCarrito, agregarFavorito}) => {
  //Estados
  const {id} = useParams() //Desesctruracion
  const [producto, setProducto] = useState({})
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleToggle = (toggle) => {
    setToggle(!toggle)
  }

  console.log(toggle);
  
  //Promesa
  const getProducto = () => {
    axios.get(`http://localhost:3002/productos/${id}`)
      .then(res => {
        setProducto(res.data.data)
        setLoading(false)
      })
  }

  //Efecto
  useEffect(() => {
    getProducto()
  }, [])
  
  //console.log(producto);
  if(loading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.container} >
        <div className={styles.flexBoxColumnas}>
          {/*1° columna*/}
          <img src={producto.image} alt="Imagen del producto" />
          <div className={styles.contenido}>
            {/*2° columna*/}
            <h2>{producto.title}</h2>
            <h3>{convertirPrimerLetraMayuscula(producto.category)}</h3>
              { toggle ? <p className={styles.description}>{producto.description}</p> : <p className={styles.description}>{producto.description.slice(0, 81).concat("...")}</p>}
              <div className={styles.cajaFlecha}>
                {toggle ? <AiOutlineArrowUp className={styles.flecha} onClick={() => handleToggle(toggle)}/> : <AiOutlineArrowDown className={styles.flecha} onClick={() => handleToggle(toggle)} />}
              </div>
            <p className={styles.price}>${producto.price}</p>
            <BtnCarrito mostrarVentana={mostrarVentana} agregarCarrito={agregarCarrito} producto={producto} />
            <BtnFavoritos mostrarVentana={mostrarVentana} agregarFavorito={agregarFavorito} producto={producto} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardIndividual