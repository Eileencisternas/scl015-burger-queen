import React from 'react'
import Productos from '../Productos/Productos';
import './Desayuno.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'


function Desayuno(params) {
    let arr = [
        { id: 1, titulo: "Café Americano", precio: 500, image: "icon-cafeamericano.png" },
        { id: 2, titulo: "Café con leche", precio: 700, image: "icon-cafeconleche.png"},
        { id: 3, titulo: "Sandwich Jamón y Queso", precio: 1000, image: "icon-sandwich.png"},
        { id: 4, titulo: "Jugo de frutas", precio: 700, image: "icon-jugodefrutas.png"},
    ];
    return (
        <div>
           
            <div className="container-productos" >
                {arr.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} />
                ))}
            </div>
        </div>
    );

}

export default Desayuno;