import React, { useState } from 'react';
import "./Productos.css"
import { Container } from 'reactstrap';




const ProductosAdicional = (params) => {
  const [bgColor, setbgColor] = useState(false);
  const [modal, setModal] = useState(false);
  const [adicional, setAdicional] = useState({});
  const toggle = () => setModal(!modal);


  const agregadoClick = (parametros) => {

    console.log(111, parametros, adicional)
    let agregado = adicional
    setbgColor(!bgColor)
    if(parametros.option === 1 ) {
      agregado["tipo"] = parametros.titulo;
      
    }else {
      agregado["tipo2"] += parametros.titulo;
      agregado["precio"] += parametros.precio
      
    }
    console.log(8888,  params.adicional, agregado)
    let aux = params.adicional
    aux["tipo"]= parametros.titulo
    setAdicional(agregado)
    params.setAdicional(params.adicional.concat(parametros))

      
 }

  return (
    <Container >
      
          <button className="producto btn_animated" onClick={()=>agregadoClick(params.parametros)} style={bgColor ? { background: "transparent" } : { background: "#F3CC00" }}   >
           <img width="32px" src={require('./../../asset/images/' + params.parametros.image).default} ></img>
          <h4 className="ItemsOne"> {params.parametros.titulo}</h4>
         <h5 className="Itemstwo">{params.parametros.precio}</h5>
          </button>
          {(JSON.stringify(adicional))}
        </Container>
     
  );
}

export default ProductosAdicional;

