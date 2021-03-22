import React, { Component } from 'react';
// import {useState} from 'react'
import "./Productos.css"
import { Container } from 'reactstrap';
// import {Modal, ModalHeader, ModalBody,  ModalFooter, Button } from  'reactstrap';
import {listaCarrito} from './listCarrito.json';

class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: false,
          // modal: false,
          listaCarrito,
        };
        // this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.boxClick.bind(this);


      }

    //   toggle(){
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }
    
    
      boxClick = (e) => {
        listaCarrito.push({
          
                  "titulo" : this.props.parametros.titulo,
                  "precio" : this.props.parametros.precio
              });
     
        this.setState(prevState => ({
            bgColor: !prevState.bgColor,
            // modal: !prevState.modal
         }));

         
      const badge = document.getElementById("Bagde");
      badge.innerText = listaCarrito.length;

        
      }

      
  //   agregarCarrito(){
  //     listaCarrito.push({
          
  //         "titulo" : this.props.parametros.titulo,
  //         "precio" : this.props.parametros.precio
  //     });
  //     this.setState(prevState =>({
  //         modal: !prevState.modal,
  //     }));

  //     const badge = document.getElementById("Bagde");
  //     badge.innerText = listaCarrito.length;
  // }


    state = {}
    render() {
        // console.log("parametros", this.props);
        
         return (
          <Container >
            
                <button  className="producto" style={this.state.bgColor === false ?{background: "transparent"} : {background:"#F3CC00"}}
                onClick={this.boxClick}>
                <h4 className="ItemsOne"> {this.props.parametros.titulo}</h4>
                <h5 className="Itemstwo">{this.props.parametros.precio}</h5>
                {/* <button id="prueba"  color='primary' onClick={this.toggle}>Agregar</button> */}
                </button>

                {/* <Modal isOpen={this.state.modal}>
                   <ModalHeader></ModalHeader>
                   <ModalBody>
                       <p> <b>{this.props.parametros.titulo}</b>  </p>
                       <p>Este producto tiene un valor de :<b>{this.props.parametros.precio}</b> pesos </p>
                  </ModalBody>
                   <ModalFooter className="modalFooter">
                       <Button color='primary' onClick={this.agregarCarrito}>Agregar al carrito</Button>
                       <Button color='secondary' onClick={this.toggle}>Volver atras</Button>
                   </ModalFooter>
                   </Modal> */}
                
         
                </Container>
        );
    }
}

export default Productos;