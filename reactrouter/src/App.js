import './App.css'

// import pages
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
// import components
import Navbar from './components/Navbar'
// import react router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/products/:id" element={ <Product /> } />
          {/*Nested Route*/}
          <Route path="/products/:id/info" element={ <Info /> } />
          <Route path="/search" element={ <Search /> }/>
          {/*Redirect page*/}
          <Route path="/company" element={ <Navigate to="/about" /> } />
          {/*No match route*/}
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
