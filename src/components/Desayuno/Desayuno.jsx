import React from 'react'
import Productos from '../Productos/Productos';
import './Desayuno.css';


function Desayuno(params) {

    console.log("Desayuno:",params);
    let arr = [
        { id: 10, titulo: "Café Americano", precio: 500, image: "icon-cafeamericano.png" },
        { id: 11, titulo: "Café con leche", precio: 700, image: "icon-cafeconleche.png"},
        { id: 12, titulo: "Sandwich Jamón y Queso", precio: 1000, image: "icon-sandwich.png"},
        { id: 13, titulo: "Jugo de frutas", precio: 700, image: "icon-jugodefrutas.png"},
    ];
    return (
        <div>
           <div className="container-productos" >
                {arr.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} agregarHandler={params.agregarHandler} listaCarrito={params.listaCarrito} />
                ))}
            </div>
        </div>
    );

}

export default Desayuno;
