import { Fragment, useState } from "react";
import React from 'react'


const Almuerzo = () => {

    const [almuerzo, setAlmuerzo] = useState([
        { id: 1, nombre: 'Burger Simple', precio: 1500},
        { id: 2, nombre: 'Burger Doble', precio: 3000},
        { id: 3, nombre: 'Agua 500ml', precio: 500},
        { id: 4, nombre: 'Agua 700ml', precio: 700},
        { id: 5, nombre: 'Aros de cebolla', precio: 500},
        { id: 6, nombre: 'Papas Fritas', precio: 700},
        { id: 6, nombre: 'Bebida 500ml', precio: 700},
        { id: 6, nombre: 'Bebida 750ml', precio: 1000},
       
    ]);

    const [cart, setCart] = useState([])

    return (

        <Fragment>
         <h3>Almuerzo</h3>
         {almuerzo.map((almuerzo) =>
         <almuerzo
         )}


        </Fragment>

    )

}

export default Almuerzo;