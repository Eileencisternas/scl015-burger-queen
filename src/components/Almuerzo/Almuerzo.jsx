import React from 'react';
import Productos from '../Productos/Productos';
import './Almuerzo.css';





function Almuerzo (params) {

  


    console.log("Almuerzo:", params);
    let arr = [
        { id: 1, titulo: "Burguer Simple", precio: 1500, image: "icon-burguersimple.png", agregado: 1 },
        { id: 2, titulo: "Burguer doble", precio: 3000, image: "icon-burguerdoble.png", agregado: 1 },
        { id: 3, titulo: "Agua 500ml", precio: 500, image: "icon-onionrings.png", agregado: 0 },
        { id: 4, titulo: "Agua 750ml", precio: 700, image: "icon-papasfritas.png", agregado: 0 },
    ];
    let acom = [
        { id: 5, titulo: "Aros de cebolla", precio: 500, image: "icon-burguersimple.png", agregado: 0 },
        { id: 6, titulo: "Papas fritas", precio: 700, image: "icon-burguerdoble.png", agregado: 0 },
        { id: 7, titulo: "Bebida 500ml", precio: 700, image: "icon-onionrings.png", agregado: 0 },
        { id: 8, titulo: "Bebida 750ml", precio: 1000, image: "icon-papasfritas.png", agregado: 0 },
    ]
    return (
        <div>
           <span className="spanBurger">Hamburguesas</span>
           <span className="spanBebidas">Bebidas</span>
           <div className="linea-vertical"></div>
           <div className="linea-horizontal"></div>
            <div className="container-productos" >
                {arr.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} agregarHandler={params.agregarHandler} listaCarrito={params.listaCarrito}  />
                    
                ))}
            </div>
            <span className="spanAcomp">Acompañamientos</span>
            <div className="linea-horizontal2"></div>
            <div className="container-productos2" >
                {acom.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} agregarHandler={params.agregarHandler} listaCarrito={params.listaCarrito} />
                ))}
            </div>
         </div>


    );

}

export default Almuerzo;