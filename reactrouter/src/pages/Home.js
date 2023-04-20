import { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const url = 'http://localhost:3000/products'
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    })
  }, [])

  return (
    <div>
      { data.length ? (
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>R$: {product.price}</p>
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))}
          </ul>
        ) :
        (
          <p>Carregando...</p>
        )}
    </div>
  )
}

export default Home