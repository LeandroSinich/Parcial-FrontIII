import React from 'react'

const Card = ({perro}) => {
  
  return (
    <div>
      <h4 style={{color: 'darkgreen', fontWeight:'bold'}}>{perro.nombre}, es un {perro.raza}🎉</h4>
    </div>
  )
}

export default Card