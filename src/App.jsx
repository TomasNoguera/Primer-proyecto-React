import logo from './logo.svg';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Home from './Pages/home';
import Registro from './Pages/registro';
import Sesion from './Pages/sesion';
import Detalle from './Pages/detalle';
import NavBarMenu from './Components/navbar';
import NotFound from './Pages/not_found';
import Container from 'react-bootstrap/Container'
import ProductosAlta from './Pages/productos_alta';
import ProductosModificar from './Pages/productos_modificar';
import { useState } from 'react';
import './Components/styles/navbar.css'

function App() {
  const [login,setLogin] = useState(false)
  return (
      <Router>
        <NavBarMenu isLogin={login} setLogin={setLogin} />
          <Container />
            <Routes>
              <Route path="/" element={<Home isLogin={login}/>} />
              <Route path="/registro" element={<Registro/>} />
              <Route path="/Sesion" element={<Sesion setLogin={setLogin}/>} />
              <Route path="/producto/alta" element={<ProductosAlta/>} />
              <Route path="/producto/modificar/:id" element={<ProductosModificar/>} />
              <Route path="/producto/:id" element={<Detalle/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          <Container />
      </Router>
  );
}

export default App;
