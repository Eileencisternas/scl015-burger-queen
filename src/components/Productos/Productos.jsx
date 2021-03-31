import React, { useState } from 'react';
import "./Productos.css"
import { Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  ProductosAdicional from './ProductosAdicional'



const Productos = (params) => {
  const [bgColor, setbgColor] = useState(false);
  const [modal, setModal] = useState(false);
  const [adicional, setAdicional] = useState([]);
  const toggle = () => setModal(!modal);

  const boxClick = (e) => {
    let obj = {
      "id": params.parametros.id,
      "titulo": params.parametros.titulo,
      "precio": params.parametros.precio,
      "agregado" : params.parametros.agregado,
      "cantidad" : 1
    }
      setbgColor(!bgColor)
      if(params.parametros.agregado === 1 ){
        toggle()
        setAdicional({obj})
      }else {
           
    params.agregarHandler(obj);
    const badge = document.getElementById("Bagde");
    badge.innerText = params.listaCarrito.length;
    }
  }

 const agregarCarritoAdicional = () => {
  let obj = {
    "id": adicional.obj.id,
    "titulo": adicional.obj.titulo,
    "precio": adicional.obj.precio,
    "agregado" : adicional.obj.agregado,
    "cantidad" : 1
  }
  console.log(adicional, "llamar adicional carrito")
  console.log(adicional.obj.titulo, "pasando")
  adicional.titulo= adicional.obj.titulo + adicional.tipo
  params.agregarHandler(adicional);

 }

 let acom = [
  { id: 20, titulo: "res",  precio: 0, image: "icon-burguersimple.png", agregado: 0, option: 1 },
  { id: 21, titulo: "pollo", precio: 0,  image: "icon-burguerdoble.png", agregado: 0, option: 1 },
  { id: 22, titulo: "vege",  precio: 0, image: "icon-onionrings.png", agregado: 0, option: 1 },
  { id: 23, titulo: "huevo", precio: 1000, image: "icon-papasfritas.png", agregado: 0, option: 2 },
  { id: 24, titulo: "queso", precio: 1000, image: "icon-papasfritas.png", agregado: 0, option: 2 },
]

  return (
    <Container >
     <div className="divBtn-productos">
        <button className="producto btn_animated" style={!params.listaCarrito.find((elemento)=> elemento.id === params.parametros.id) ? { background: "transparent" } : { background: "#F3CC00" }}   onClick={boxClick}>
            <img width="32px" src={require('./../../asset/images/' + params.parametros.image).default} ></img>
            <h4 className="ItemsOne"> {params.parametros.titulo}</h4>
            <h5 className="Itemstwo">{params.parametros.precio}</h5>

          </button>
          <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Queso
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                  Huevo
              </Label>
            </FormGroup>
      </div>   

            

    </Container>
  );
}

export default Productos;

