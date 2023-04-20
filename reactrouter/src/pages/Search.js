import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Search = () => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState([])
  const url = `http://localhost:3000/products?${searchParams}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
  }, [url])

  return (
    <div>
      <ul>
        {
          data.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>R$: {product.price}</p>
              <Link
                to={`/products/${product.id}`}
              >
                Detalhes
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Search
