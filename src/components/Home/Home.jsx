import React from 'react'
import { useHistory } from 'react-router-dom';
import './Home.css';
import proyecto6 from './ImgHome/proyecto6.png'

const Home = () => {
    const history = useHistory();
    const OnclickBtnHome1 = (e) =>{
        history.push('/Mesero');
    };
    const OnclickBtnHome2 = (e) =>{
        history.push('/Cocina');
    };
    const date = new Date();
      const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${
        date.getFullYear()}`;
      const hora= `${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${
        (`00${date.getSeconds()}`).slice(-2)}`;
    return (
        <div className="Home" >
            <div className="Home-Header">
                <p>Fecha: {fecha}<br></br>
                   Hora: {hora}
                </p>
                
            </div>
           <div className="Home-Body">
               <button type="button" className="Home-Button" onClick={OnclickBtnHome1}>Mesero</button>
               <button type="button" className="Home-Button" onClick={OnclickBtnHome2}>Cocina</button>
           </div>
           <div className="HomeDivLogo">
               <img className="Img-Home" src= {proyecto6} alt=""/>
           </div>

        </div>
    )

}


export default Home;