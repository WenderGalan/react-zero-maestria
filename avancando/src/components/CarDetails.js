import React from 'react'

const CarDetails = ({ id, brand, color, newCar, km }) => {
  return (
    <div>
        <div>
            <ul>
                <li>ID: { id }</li>
                <li>Marca: { brand }</li>
                <li>Cor: { color }</li>
                <li>KM: { km }</li>
            </ul>
            { newCar ? <p>O carro é novo!</p> : <p>O carro é usado!</p>}
        </div>
    </div>
  )
}

export default CarDetails