import React, { useState } from 'react';
import { Badge, Button, Table, ButtonToggle } from "reactstrap";



const Pedido = (params) => {
    // console.log("Pedido:[", params);

    const [count, setCount] = useState(1);
    // const incrementCount = () => {
    //     setCount(count + 1)
    //   }
    //   const descrementCount = () => {
    //     setCount(count - 1)
    //   }
    const montoTotal = () => {
        // Monto para la suma del carrito
        let total = 0;
        let sumaTotal = params.listaCarrito.map((elemento) => {
            total += parseInt(elemento.precio * elemento.cantidad);
        });
        return total;
    }
    const borrar = (indice) => {
        //alert(indice)
        console.log(params);
        params.borraHandler(indice)
    }

    const cantidad = (indice, cantidad) => {
        console.log(1, params);
        if (cantidad >= 1) {
            params.cantidadHandler(indice, cantidad)
            borrar(-1)
        }


    }

    const tablaCarrito = params.listaCarrito.map((elemento, i) => {

        return (
            <tr key={i}>
                <td>
                    <ButtonToggle color="success" onClick={() => { cantidad(i, elemento.cantidad + 1) }} >+</ButtonToggle>{' '}
                  
                
                    <span className="cantidad">{elemento.cantidad}</span>
                    <ButtonToggle color="danger" onClick={() => { cantidad(i, elemento.cantidad - 1) }} >-</ButtonToggle>{' '}

                    {/* <Button onClick={() => { cantidad(i, elemento.cantidad - 1) }}>
                        <Badge> -  </Badge>
                    </Button> */}
                </td>



                <td>{elemento.agregado ? (elemento.titulo + ' ' + elemento.agregado) : (elemento.titulo)}</td>
                <td>{elemento.precio * elemento.cantidad} </td>

                <td>  
                    
                    <ButtonToggle color="" onClick={() => borrar(i)} >  <img width="16px" src={require('./../../asset/images/icon-delete.png').default} ></img></ButtonToggle>{' '}
                    </td>
            </tr>
        );
    });


    return (
        <div>
            <Button id="Popover1" color="info">
                <Badge color="secondary" id="Bagde">
                    {params.listaCarrito.length}
                </Badge>
            </Button>

            <div id="Bagde">
                {/* <p>Listado de compras</p> */}
                <Table>
                    <thead>
                        <tr>
                            <th width="150px">#</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{tablaCarrito}</tbody>
                    <tfoot>
                        <td>Total:</td>
                        <td> </td>
                        <td> </td>
                        <td>{montoTotal()}</td>
                    </tfoot>
                </Table>
            </div>

        </div>



    );
}

export default Pedido;