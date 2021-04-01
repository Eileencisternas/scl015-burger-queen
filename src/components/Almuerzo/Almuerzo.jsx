import React from 'react';
import Productos from '../Productos/Productos';
import './Almuerzo.css';





function Almuerzo (params) {

  


    console.log("Almuerzo:", params);
    let arr = [
        { id: 1, titulo: "Burguer Simple res", precio: 1500, image: "icon-burguersimple.png", agregado: 0 },
        { id: 2, titulo: "Burguer Doble res", precio: 3000, image: "icon-burguerdoble.png", agregado: 0 },
        { id: 3, titulo: "Burguer Simple pollo", precio: 1500, image: "icon-burguersimple.png", agregado: 0, option: 0 },
        { id: 4, titulo: "Burguer Doble pollo", precio: 3000, image: "icon-burguerdoble.png", agregado: 0, option: 0 },
        { id: 5, titulo: "Burguer Simple vege", precio: 1500, image: "icon-burguersimple.png", agregado: 0, option: 0 },
        {id: 6, titulo: "Burguer Doble vege", precio: 3000, image: "icon-burguerdoble.png", agregado: 0, option: 0 },
    ];
    let acom = [
        { id: 7, titulo: "Aros de cebolla", precio: 500, image: "icon-onionrings.png", agregado: 0 },
        { id: 8, titulo: "Papas fritas", precio: 700, image: "icon-papasfritas.png", agregado: 0 },
    ]
    let agreg = [
        { id: 13, titulo: "Huevo", precio: 300, image: "huevo.png", agregado: 0, option: 0 },
        { id: 14, titulo: "Queso", precio: 300, image: "queso.png", agregado: 0, option: 0 },
    ]
    let bebidas = [
      
        { id: 9, titulo: "Bebida 500ml", precio: 700, image: "icon-soda500ml.png", agregado: 0 },
        { id: 10, titulo: "Bebida 750ml", precio: 1000, image: "icon-soda750ml.png", agregado: 0 },
        { id: 11, titulo: "Agua 500ml", precio: 500, image: "icon-water.png", agregado: 0 },
        { id: 12, titulo: "Agua 750ml", precio: 700, image: "icon-water750ml.png", agregado: 0 },
      
       
    ]
    return (
        <div>
           <span className="spanBurger">Hamburguesas</span>
       
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
            <span className="spanAgre">Agregados</span>
            <div className="container-productos3" >
                {agreg.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} agregarHandler={params.agregarHandler} listaCarrito={params.listaCarrito} />
                ))}
            </div>
            
            <span className="spanAcomp">Bebidas</span>
            <div className="linea-horizontal4"></div>
            <div className="container-productos4" >
                {bebidas.map((elemento) => (
                    <Productos key={elemento.id} parametros={elemento} agregarHandler={params.agregarHandler} listaCarrito={params.listaCarrito} />
                ))}
                
            </div>
         </div>


    );

}

export default Almuerzo;