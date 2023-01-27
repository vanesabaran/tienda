import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import styles from './app.module.css'
import axios from 'axios'
import ProductList from './components/ProductList'
import Popup from './components/Popup'
import { Routes, Route, Navigate } from "react-router-dom";
import User from './components/User'
import CardIndividual from './components/CardIndividual'
import BtnCategorias from './components/BtnCategorias'

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
  const [pregunta, setPregunta] = useState("")
  const [idProducto, setIdProducto] = useState(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
  const categorias = productos.map(producto => producto.category)
  const [productosPorCategoria, setProductosPorCategoria] = useState([])
  let categoriasFiltradas = categorias.filter((item,index)=>{
    return categorias.indexOf(item) === index;
  })


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

  useEffect(() => {
    setProductosPorCategoria(productos.filter(producto => producto.category === categoriaSeleccionada))
  }, [categoriaSeleccionada])

  //Funciones - promesas
  const agregarCarrito = async (id) => {
    try { 
        const productoSeleccionado = productos.find(producto => producto.id == id)
        await axios.post(urlCarrito,
          productoSeleccionado
        )
        setCarrito([...carrito, productoSeleccionado])
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
    } catch (error) {
      console.error("ERROR:", error)
    }
}

  const eliminarFavorito = async (id) => {
    try{
      const res = await axios.delete(`${urlFavoritos}/${id}`)
      setFavoritos(res.data.data)
    }catch(error){
      console.error("ERROR:", error)
    }
  }

  const eliminarCarrito = async (id) => {
    try {
      const res = await axios.delete(`${urlCarrito}/${id}`)
      setCarrito(res.data.data)
    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  const mostrarVentana = (pregunta, id) => {
    setPregunta(pregunta)
    setIdProducto(id)
    setShow(true)
  }

  const aceptar = (caso) => {
    const id = idProducto
    switch(caso) {
      case "AF":
        agregarFavorito(id)
      break
      case "AC":
        agregarCarrito(id)
      break
      case "EF":
        eliminarFavorito(id)
      break
      case "EC":
        eliminarCarrito(id)
      break
    }
    setShow(false)
  }

  return (
    <div className={styles.App}>
      <Navbar cantidad={carrito.length} categorias={categoriasFiltradas} setCategoriaSeleccionada={setCategoriaSeleccionada} />
      {/* <BtnCategorias categorias={categoriasFiltradas} setCategoriaSeleccionada={setCategoriaSeleccionada}/> */}
      <div className={show ? styles.ventana : ""}>
        { show && <Popup setShow={setShow} pregunta={pregunta} aceptar={aceptar} /> }
        <Routes>
          <Route path="/" element={<h2>Bienvenidos a nuestra tienda!</h2>} />
          <Route path="user" element={<User />}/>
          <Route path="home" element={<ProductList productos={productos} mostrarVentana={mostrarVentana} agregarCarrito={agregarCarrito} agregarFavorito={agregarFavorito}/>}/>
          <Route path="favoritos" element={<ProductList productos={favoritos} mostrarVentana={mostrarVentana} agregarCarrito={agregarCarrito} eliminarFavorito={eliminarFavorito}/>}/>
          <Route path="categoria/:nombreCategoria" element={<ProductList productos={productosPorCategoria}/>}/>
          <Route path="carrito" element={<ProductList productos={carrito} mostrarVentana={mostrarVentana} agregarFavorito={agregarFavorito} eliminarCarrito={eliminarCarrito} />}/>
          <Route path="productos/:id" element={<CardIndividual />}/>
          {/* <Route path="*" element={<Navigate to="home" />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
