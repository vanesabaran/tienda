import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import styles from './app.module.css'
import axios from 'axios'
import ProductList from './components/ProductList'
import Popup from './components/Popup'
import { Routes, Route, Navigate } from "react-router-dom";
import User from './components/User'
import CardIndividual from './components/CardIndividual'

//Rutas (paths)
const urlProductos="http://localhost:3002/productos"
const urlCarrito ="http://localhost:3002/carrito"
const urlFavoritos ="http://localhost:3002/favoritos"

function App() {
  //Estados
  const [productos, setProductos] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [show, setShow] = useState(false)

  //Axios - Promesas
  const getProductos = async () => {
    try { 
      const {data} = await axios.get(urlProductos)
      setProductos(data)
    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  const getFavoritos = async () => {
    try { 
      const {data} = await axios.get(urlFavoritos)
      setFavoritos(data)
    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  const getCarrito = async () => {
    try { 
      const {data} = await axios.get(urlCarrito)
      setCarrito(data)
    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  //Efecto
  useEffect(() => {
    getProductos()
    getCarrito()
    getFavoritos()
  }, [])

  //Funciones - promesas
  const agregarCarrito = async (id) => {
    try { 
        const productoSeleccionado = productos.find(producto => producto.id == id)
        await axios.post(urlCarrito,
          productoSeleccionado
        )
        setCarrito([...carrito, productoSeleccionado])
        alert("Producto agregado al carrito")
    } catch (error) {
      console.error("ERROR:", error)
    }
  }
  
  const agregarFavorito = async (id) => {
    try {
      const favoritoSeleccionado = productos.find(producto => producto.id == id)
      await axios.post(urlFavoritos, 
        favoritoSeleccionado
      )
      setFavoritos([...favoritos, favoritoSeleccionado])
      alert("Producto agregado a favoritos")
    } catch (error) {
      console.error("ERROR:", error)
    }
}

  const eliminarFavorito = async (id) => {
    try{
      const res = await axios.delete(`${urlFavoritos}/${id}`)
      setFavoritos(res.data.data)
      alert("Producto eliminado de favoritos")
    }catch(error){
      console.error("ERROR:", error)
    }
  }

  const eliminarCarrito = async (id) => {
    try {
      const res = await axios.delete(`${urlCarrito}/${id}`)
      setCarrito(res.data.data)
      alert("Producto eliminado del carrito")
    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  const mostrarVentana = () => {
    console.log("ventana");
    setShow(true)
  }

  return (
    <div className={styles.App}>
      <Navbar cantidad={carrito.length}/>
      <div className={show ? styles.ventana : ""}>
        { show && <Popup setShow={setShow}/> }
        <Routes>
          <Route path="/" element={<h2>Bienvenidos a nuestra tienda!</h2>} />
          <Route path="user" element={<User />}/>
          <Route path="home" element={<ProductList productos={productos} mostrarVentana={mostrarVentana} agregarCarrito={agregarCarrito} agregarFavorito={agregarFavorito}/>}/>
          <Route path="favoritos" element={<ProductList productos={favoritos} agregarCarrito={agregarCarrito} eliminarFavorito={eliminarFavorito}/>}/>
          <Route path="carrito" element={<ProductList productos={carrito} agregarFavorito={agregarFavorito} eliminarCarrito={eliminarCarrito} />}/>
          <Route path="productos/:id" element={<CardIndividual />}/>
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
