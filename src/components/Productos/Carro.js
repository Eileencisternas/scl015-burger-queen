import React from 'react';
import {Badge, Button,  Table} from 'reactstrap'
import {listaCarrito} from './listCarrito.json'


class Carro extends React.Component {
    constructor(){
        super();
        this.state ={ // estados de la aplicación
        //    popoverOpen: false,
           listaCarrito
        };

        // this.toggle = this.toggle.bind(this);
     }

    // toggle(){
    //     this.setState(prevState => ({
    //         // popoverOpen: !prevState.popoverOpen
    //     }))
    // }

    montoTotal() { // Monto para la suma del carrito
        let total = 0;
        let sumaTotal = this.state.listaCarrito.map(
            (listaCarrito) => {
                total += parseInt(listaCarrito.precio) ;
               
            }        
        )
        return (total)
    }


 


    render(){
        const arregloCarrito = this.state.listaCarrito.map((listaCarrito, i) => {
            return(
                <tr>
                      <td>{(i += 1)}</td>
                      <td>{listaCarrito.titulo}</td>
                     <td>{listaCarrito.precio}</td>
                </tr>
            );
       }
    )
            
        return (

            <div>
                <Button id="Popover1" color="info">
                {/* <span class="material-icons">shopping_cart </span> */}
                        <Badge color="secondary" id="Bagde">{listaCarrito.length}</Badge>
                </Button>

                {/* <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody> */}
                    <div id="Bagde" >
                    <p>Listado de compras</p>
                        <Table>
                             <thead>
                                <tr>
                                    <th>#</th>
                                    <th>producto</th>
                                    <th>precio</th>
                                 </tr>
                            </thead>
                            <tbody>
                              {arregloCarrito}
                                                                  
                            </tbody>
                            <tfoot>
                                <td>Total:</td>
                                <td>    </td>
                              
                                <td>{this.montoTotal()}</td>
                            </tfoot>

                        </Table>

                    </div>
                       
                    {/* </PopoverBody> */}
                {/* </Popover> */}

            </div>
        );      
    }
}



export default Carro; 