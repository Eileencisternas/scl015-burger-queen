import React, { useState } from 'react';
import "./Productos.css"
import { Container } from 'reactstrap';



const Productos = (params) => {
  const [bgColor, setbgColor] = useState(false);

  const boxClick = (e) => {
    let obj = {
      "id": params.parametros.id,
      "titulo": params.parametros.titulo,
      "precio": params.parametros.precio
    }
    //if (!params.listaCarrito.find((element) => element.id == params.parametros.id)){
      setbgColor(!bgColor)
    
    
    params.agregarHandler(obj);


    const badge = document.getElementById("Bagde");
    badge.innerText = params.listaCarrito.length;
  }
  return (
    <Container >
      {/*  style={bgColor === false ? { background: "transparent" } : { background: "#F3CC00" }} */}
      <button className="producto btn_animated" style={bgColor === false ? { background: "transparent" } : { background: "#F3CC00" }}   onClick={boxClick}>
        <img width="32px" src={require('./../../asset/images/' + params.parametros.image).default} ></img>
        <h4 className="ItemsOne"> {params.parametros.titulo}</h4>
        <h5 className="Itemstwo">{params.parametros.precio}</h5>
      </button>
    </Container>
  );
}

export default Productos;




// class Productos2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bgColor: false,
//       // modal: false,
//       listaCarrito,
//     };
//     // this.toggle = this.toggle.bind(this);
//     this.agregarCarrito = this.boxClick.bind(this);


//   }
//   boxClick = (e) => {

//     let obj = {
//       "titulo": this.props.parametros.titulo,
//       "precio": this.props.parametros.precio
//     }
//     this.props.agregarHandler(obj);
//     this.setState(prevState => ({
//       bgColor: !prevState.bgColor,
//     }));
//     const badge = document.getElementById("Bagde");
//     badge.innerText = listaCarrito.length;
//   }
//   state = {}
//   render() {
//     return (
//       <Container >
//         <button className="producto" style={this.state.bgColor === false ? { background: "transparent" } : { background: "#F3CC00" }}
//           onClick={this.boxClick}>
//           <h4 className="ItemsOne"> {this.props.parametros.titulo}</h4>
//           <h5 className="Itemstwo">{this.props.parametros.precio}</h5>
//         </button>
//       </Container>
//     );
//   }
// }
// export default Productos2;