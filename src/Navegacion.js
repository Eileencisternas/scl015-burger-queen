import React from 'react';
import {Navbar, NavbarBrand, NavItem, Nav } from 'reactstrap'
import Carro from './components/Productos/Carro'

class Navegacion extends React.Component {
    render() {
        return(
            <Navbar color="light" light expand="xl">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                                     
                          
                        <NavItem>
                             <Carro/>
                        </NavItem>
                        </Nav>               

            </Navbar>

        )
    }

}

export default Navegacion;