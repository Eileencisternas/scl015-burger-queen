import React from 'react';
import {Table} from 'reactstrap'
import {listaCarrito} from './listCarrito.json'


class Carro extends React.Component {
    constructor(){
        super();
        this.state ={ // estados de la aplicación
         listaCarrito,
        };
    }
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
                    {/* <td>{(i += 1)}</td> */}
                    <td>{listaCarrito.titulo}</td>
                    <td>{listaCarrito.precio}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg></td>
                </tr>
             );
       }
    )            
        return (

            <div>
                {/* <Button id="Popover1" color="info"> */}
                {/* <span class="material-icons">shopping_cart </span> */}
                        {/* <Badge color="secondary" id="Bagde">{listaCarrito.length}</Badge> */}
                {/* </Button> */}

                 <div>
                        
                    <p>Listado de compras</p>
                        <Table>
                             <thead>
                                <tr>
                                    <th>#</th>
                                    <th>producto</th>
                                    <th>precio</th>
                                    <th></th>
                                 </tr>
                            </thead>
                            <tbody>
                              {arregloCarrito}
                                                                  
                            </tbody>
                            <tfoot>
                                <td></td>
                                <td>Total:</td>
                                <td>{this.montoTotal()}</td>
                            </tfoot>
                        </Table>
                    </div>
                       
                   </div>
        );      
    }
}



export default Carro; 