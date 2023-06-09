import logo from './logo.svg';
import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';


function App() {
  return (
    <>
    <Navigation />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/products'  exact element={<Products />} />
      <Route path='/cart' element={<Cart />} />

    </Routes>


  </>
  );
}

export default App;
