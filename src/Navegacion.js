import {Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap'
import Carro from './components/Productos/Carro'
import Pedido from './components/Productos/Pedido'


const Navegacion = (params) => {
    return (
      <Navbar color="light" light expand="xl">
    
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Pedido listaCarrito={params.listaCarrito} borraHandler={params.borraHandler} />
          </NavItem>
        </Nav>
      </Navbar>
    );
}
 
export default Navegacion;





// class Navegacion extends React.Component {
//     render() {
//         return (
//           <Navbar color="light" light expand="xl">
//             <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <Pedido listaCarrito={listaCarrito} />
//               </NavItem>
//             </Nav>
//           </Navbar>
//         );
//     }

// }

// export default Navegacion;