import { useEffect, useState } from "react"
import axios from "axios";

const User = () => {
  //Estado
  const [user, setUser] = useState({})

  //Promesa
  const mostrarUser = async () => {
    const {data} = await axios.get("http://localhost:3002/user")
    //setUser(data.results[0])
    setUser(data);
  }

  //Efecto
  useEffect(() => {
    mostrarUser()
  }, [])

      
  return (
    <div>
        {/* <img src={user.picture.medium} />  */}
        <p>Hola, mi nombre es</p>
        <h2>{user.name.first} {user.name.last}</h2>
        <p>Email: {user.email}</p>
        <p>Edad: {user.dob.age}</p>
    </div>
  )
}

export default User