import './App.css';
import Logo from './assets/logo512.png'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Ferrari GT2", color: "Roxa", newCar: false, km: 4520},
    {id: 3, brand: "Ferrari GT3", color: "Verde", newCar: true, km: 5820},
    {id: 4, brand: "Ferrari GT4", color: "Rosa", newCar: true, km: 1000}
  ];

  function showMessage () {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Avançando em React</h1>
        <ManageData/>
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Wender" age={26}/>
        {/* Props */ }
        <CarDetails id={1} brand={"Ferrari"} color={"Amarela"} newCar={true} km={0} />
        {/* Loop em array de Objetos */}
        {cars.map((car) => ( 
          <CarDetails
            key={car.id} 
            id={car.id} 
            brand={car.brand} 
            color={car.color} 
            newCar={car.newCar} 
            km={car.km} 
          />
        ))}
        {/* Fragment */ }
        <Fragment propFragment="teste"/>
        {/* Prop Children */ }
        <Container>
          <p>Aqui é o que tem dentro do componente.</p>
        </Container>
        {/* Executar FUnção */ }
        <ExecuteFunction myFunction={showMessage}/>
        <br />
        {/* State lift */ }
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />
        {/* Imagem em Public */ }
        <div>
          <img src="/logo512.png" alt="Logo" />
        </div>
        {/* Imagem em Assets */ }
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
