import React from 'react'
import Productos from '../Productos/Productos';
import './Almuerzo.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'


function Almuerzo (params) {
    let arr = [
        { id: 1, titulo: "Burguer Simple", precio: 1500, image: "icon-burguersimple.png" },
{ id: 2, titulo: "Burguer doble", precio: 3000, image: "icon-burguerdoble.png" },
{ id: 3, titulo: "Aros de Cebolla", precio: 5000, image: "icon-onionrings.png" },
{ id: 4, titulo: "Papas Fritas", precio: 700, image: "icon-papasfritas.png" },
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

export default Almuerzo;