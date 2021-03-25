import React, { useState } from 'react';
import { Badge, Button, Table } from "reactstrap";



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
            total += parseInt(elemento.precio * elemento.cantidad );
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
        if(cantidad >= 1){ 
        params.cantidadHandler(indice, cantidad)
        borrar(-1)
        }

        
    }

    const tablaCarrito = params.listaCarrito.map((elemento, i) => {
       
        return (
            <tr key={i}>
                 <td>   
                    <Button onClick={() => {cantidad(i, elemento.cantidad + 1)}} >
                    <Badge> + </Badge>
                    </Button>
                </td>
                
                <p>
                {elemento.cantidad}
                </p>
                 <td>  
                     <Button onClick={() => {cantidad(i, elemento.cantidad - 1)}}>
                    <Badge> -  </Badge>
                </Button>
                </td>
                
                {/* <td>{(i += 1)}</td> */}

                <td>{elemento.agregado ? (elemento.titulo + ' ' + elemento.agregado ) : (elemento.titulo) }</td>
                <td>{elemento.precio * elemento.cantidad } </td>
                
                <td>   <Button id="Popover1" color="danger" onClick={() => borrar(i)}>
                    <Badge color="secondary" id="Bagde">
                        X
                    </Badge>
                </Button></td>
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
                    <tbody>{tablaCarrito}</tbody>
                    <tfoot>
                        <td>Total:</td>
                        <td> </td>

                        <td>{montoTotal()}</td>
                    </tfoot>
                </Table>
            </div>

        </div>



    );
}

export default Pedido;