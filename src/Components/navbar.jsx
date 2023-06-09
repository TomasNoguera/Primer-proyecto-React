import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import './styles/navbar.css'

function NavBarMenu({isLogin,setLogin}){

    const handleLogout = ()=>{
      setLogin(false)
    }

    return(
      <div className='navbar_principal'>      
        <Navbar expand="lg"> 
          <Navbar.Brand as={Link} to="/">Todo Celulares</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {!isLogin && (
              <>
                <Nav.Link as={Link} to="/Registro">Registro</Nav.Link>
                <Nav.Link as={Link} to="/Sesion">Ingresar</Nav.Link>
              </>
              )}

            {isLogin && (
            <>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <div className='navbar_principal'>   
                <NavDropdown.Item as={Link} to="/producto/alta">Nuevo producto</NavDropdown.Item>
                </div>
              </NavDropdown>

              <Nav.Link onClick={handleLogout}>Salir</Nav.Link>
            </>
            )}
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>  
    )
}

export default NavBarMenu;