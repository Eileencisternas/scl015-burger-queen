import React, { Component } from 'react';
import "./Productos.css"
class Productos extends Component {
    state = {}
    render() {
        console.log("parametros", this.props);
        return (
            <div className="producto">
                <img></img>
                <h4 className="ItemsOne"> {this.props.parametros.titulo}</h4>
                <h5 className="Itemstwo">{this.props.parametros.precio}</h5>
            </div>
        );
    }
}

export default Productos;