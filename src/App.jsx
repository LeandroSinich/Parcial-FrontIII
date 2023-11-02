import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import Card from './Components/Card'

function App() {
  const [perro, setPerro] = useState({raza:'', nombre:''})
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(perro.raza.length >= 3 && perro.nombre.length >= 6){
      setShow(true)
      setError(false)
    }else{
      setShow(false)
      setError(true)
    }

  }
  const handleRaza = (e)=>{
    setPerro({...perro, raza: e.target.value.trim().toUpperCase()})
    setShow(false)}
  const handleNombre = (e)=>{
    setPerro({...perro, nombre: e.target.value.trim().toUpperCase()})
    setShow(false)}
  
  return (
      <div className='App'>
        <h1>Tu Perro 🐶</h1>
        <form onSubmit={handleSubmit}>
          <label>Raza</label>
          <input type='text' placeholder='Ej: Labrador' style={{margin: 10}}  onChange={handleRaza}></input>
          <br/>
          <label>Nombre</label>
          <input type='text' placeholder='Jack' style={{margin: 10}} onChange={handleNombre}></input>
          <br/>
          <button>Enviar</button>
        </form>
        {show && <Card perro={perro}/>}
        {error && <h3 style={{color:'darkred', fontWeight:'bold'}}>Por favor chequea que la información sea correcta</h3>}
        
        
      </div>        
   
  )
}

export default App
