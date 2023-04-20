import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Product = () => {
    const url = 'http://localhost:3000/products'
    const { id } = useParams()
    const [record, setRecord] = useState(null)

    useEffect(() => {
        axios.get(`${url}/${id}`).then((response) => {
            setRecord(response.data);
        })
    }, [])


    return (
        <>
            {
                record ? (
                    <div>
                        <h1>
                            {
                                record.name.toUpperCase()
                            }
                        </h1>
                        <h2>
                            R$ {record.price}
                        </h2>
                        <Link
                          to={{
                              pathname: `/products/${id}/info`,
                              state: { record }
                          }}
                        >
                            Mais Informações
                        </Link>
                    </div>
                ) : (
                    <p>Carregando o produto...</p>
                )
            }
        </>
    )
}

export default Product
