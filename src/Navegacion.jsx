import {Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap'
// import Carro from './components/Productos/Carro'
import Pedido from './components/Productos/Pedido'

//todo el arreglo y la funcion


const Navegacion = (params) => {
    return (
      <Navbar color="light" light expand="xl">
    
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Pedido listaCarrito={params.listaCarrito} borraHandler={params.borraHandler} cantidadHandler={params.cantidadHandler}/> 
          </NavItem>
        </Nav>
      </Navbar>
    );
}
 
export default Navegacion;


