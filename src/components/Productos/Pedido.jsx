
import { Badge, Button, Table } from "reactstrap";

const Pedido = (params) => {
    console.log("Pedido:[", params);
    const montoTotal = () => {
        // Monto para la suma del carrito
        let total = 0;
        let sumaTotal = params.listaCarrito.map((elemento) => {
            total += parseInt(elemento.precio);
        });
        return total;
    }
    const borrar = (indice) => {
        //alert(indice)
        console.log(params);
        params.borraHandler(indice)
    }
    const tablaCarrito = params.listaCarrito.map((elemento, i) => {
        return (
            <tr key={i}>
                <td>{(i += 1)}</td>
                <td>{elemento.titulo}</td>
                <td>{elemento.precio}</td>
                <td>   <Button id="Popover1" color="danger" onClick={() => borrar(i - 1)}>
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