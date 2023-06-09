import './App.css';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

/**
 */
const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando os dados
  // useEffect(() => {
  //   async function fetchData () {
  //     const res = await fetch(url)
  //     const data = await res.json()

  //     setProducts(data)
  //     console.log(data);
  //   };

  //   fetchData()
  // }, []);

  // 4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - carregando dinamico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      { /* 6 - Adicionando o loading */}
      { loading && <p>Carregando os dados...</p>}
      { error && <p>{error}</p>}
      { !error && (
        <ul>
        {items && 
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
        ))}
      </ul>
      )}
      
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          { /* 7 - state de loading no post */}
          { loading && <input type="submit" value="Aguarde" disabled /> }
          { !loading && <input type="submit" value="Criar" /> }
        </form>
      </div>
    </div>
  );
}

export default App;
