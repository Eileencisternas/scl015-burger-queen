import React from 'react'
// import Almuerzo from '../Almuerzo/Almuerzo'
// import Desayunos from '../Desayunos/Desayunos'
import {
  Link,
  NavLink
  } from 'react-router-dom'
import './Home.css';
import logoInit from './imgApp/logoInit.png';
const Home = () => {
    return (
      <div>
      <div className="fondoInit">
      <div className="fondoInit">
        <div className="btnInic">
        <Link to="/" ></Link>
        <Link to="/Desayunos" className="btnMesera" >Mesera</Link>
        <NavLink to="/Cocina" className="btn btn-dark" activeclassName="active">Cocina</NavLink>
       </div>
     </div>
     <div className="divLogo">
       <img  className="logoInit" src={logoInit} alt="logo" />
     </div>
     </div>
        {/* <div className="container" >
            <div>
            <h2>Mesero:</h2>
           </div>
           <div>
            <h2>Nombre de Cliente:</h2>
           </div>
           <div>
            <h2>Numero de Mesa:</h2>
           </div>
            <div className="row">
                <div className="col">
                    <h2 className="col">Menu</h2>
                    <Desayunos></Desayunos>
                    <Almuerzo></Almuerzo>
                </div>
                <div className="col">
                  <h2>Monto Total</h2>
                </div>
                </div>         
           </div> */}
        </div>
    )
}

export default Home;