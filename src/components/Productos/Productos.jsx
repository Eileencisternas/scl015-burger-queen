import React, { Component } from 'react';
// import {useState} from 'react'
import "./Productos.css"

class Productos extends Component {

    // const  [nombre, setNombre] = useState('');

    state = {}
    render() {
        console.log("parametros", this.props);
        // let path = `./../asset/images/${this.props.parametros.image}`;
         return (
            <div className="producto">
                
                {/* <img src={path} /> */}
                <h4 className="ItemsOne"> {this.props.parametros.titulo}</h4>
                <h5 className="Itemstwo">{this.props.parametros.precio}</h5>
            </div>
        );
    }
}

export default Productos;