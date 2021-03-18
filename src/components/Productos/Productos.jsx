import React, { Component } from 'react';
import "./Productos.css"
class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: false
        }
      }
    
    
      boxClick = (e) => {
        this.setState(prevState => ({
            bgColor: !prevState.bgColor
          }));
      }
    state = {}
    render() {
        console.log("parametros", this.props);
        let path = `./../asset/images/${this.props.parametros.image}`;
         return (
            
                <button className="producto" style={this.state.bgColor === false ?{background: "transparent"} : {background:"#F3CC00"}}
                onClick={this.boxClick}>
                <img src={path} />
                <h4 className="ItemsOne"> {this.props.parametros.titulo}</h4>
                <h5 className="Itemstwo">{this.props.parametros.precio}</h5>
                </button>
                
         
        
        );
    }
}

export default Productos;