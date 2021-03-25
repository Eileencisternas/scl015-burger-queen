import React, { Component } from 'react';
import "./Productos.css"
import {listaCarrito} from './listCarrito.json';

class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: false,
        //   lista: [],
        };
       this.agregarCarrito = this.boxClick.bind(this);
      }
       boxClick = (e) => {
        listaCarrito.push({
                  "titulo" : this.props.parametros.titulo,
                  "precio" : this.props.parametros.precio
              });

       

        this.setState(prevState => ({
            bgColor: !prevState.bgColor,
         }));
        
     
      }
    state = {}
    render() {
       return (
          <div>
                <button  className="producto" style={this.state.bgColor === false ?{background: "transparent"} : {background:"#F3CC00"}}
                onClick={this.boxClick}>
                <h4 className="ItemsOne"> {this.props.parametros.titulo}</h4>
                <h5 className="Itemstwo">{this.props.parametros.precio}</h5>
                </button>
              </div>
        );
    }
}

export default Productos;