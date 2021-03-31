import React, { useState } from 'react';
import proyecto6 from '../Home/ImgHome/proyecto6.png'
import "./Mesero.css"
import Desayunos from '../Desayuno/Desayuno'
import Almuerzo from '../Almuerzo/Almuerzo';
import Navegacion from '../../Navegacion';

const Mesero = () => {
    const [tipo, setTipo] = useState('Desayuno');
    const [listaCarrito, setListaCarrito] = useState([]);

    const agregarHandler = (obj) => {
        console.log("desde padre", obj);
        setListaCarrito(listaCarrito.concat(obj))
    }

    const borraHandler = (indice) => {
        console.log("borrando:", indice, listaCarrito)
        //let i = listaCarrito.indexOf(indice);
    
        let filteredArray = listaCarrito.filter((_, i) => i !== indice)
        setListaCarrito(filteredArray )
    
   }

   const cantidadHandler = (indice, cantidad) => {
    console.log("cantidad:", indice, cantidad, listaCarrito)
    let arregloaux = listaCarrito
    arregloaux[indice].cantidad= cantidad 
    console.log("cantidad 22222:", indice, cantidad, arregloaux)
    setListaCarrito(arregloaux)

   }
    return (
        <div className="Mesero">
            <div className="Mesero-header">
                <img className="Logo-Mesero" src={proyecto6} alt="" />
            </div>
            <div className="Mesero-body">
                <div className="Mesero-datos">
                    <input className="input-mesero" type="text" placeholder="Mesero" />
                    <input className="input-mesa" type="text" placeholder="N° de mesa" />
                    <input className="input-cliente" type="text" placeholder="Cliente" />
                </div>
                <div className="Mesero-options">
                    <div className="Mesero-productos">
                        <div className="vistas-productos">
                            <button style={tipo === 'Desayuno' ? { background: "rgba(0, 0, 0, 0.5)" } : { background: "black" }} className="BtnDesayuno" onClick={() => setTipo('Desayuno')}> Desayuno</button>

                            <button style={tipo === 'Almuerzo' ? { background: "rgba(0, 0, 0, 0.5)" } : { background: "black" }} className="BtnAlmuerzo" onClick={() => setTipo('Almuerzo')}> Almuerzo</button>

                        </div>
                        
                        {tipo === 'Desayuno' ? <Desayunos agregarHandler={agregarHandler} listaCarrito={listaCarrito} /> : <Almuerzo agregarHandler={agregarHandler} listaCarrito={listaCarrito} />}


                    </div>
                    <div className="Mesero-pedido">
                        <div className="Mesero-listado">
                          
                            <Navegacion listaCarrito={listaCarrito} borraHandler={borraHandler} cantidadHandler={cantidadHandler} />

                        </div>
                        <div className="btns-pedido">
                            <button className="enviar-cocina">Enviar a Cocina</button>
                            <button className="cancelar-pedido">Cancelar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Mesero;