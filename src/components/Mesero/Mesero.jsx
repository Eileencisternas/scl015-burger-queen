import React, { useState } from 'react';
import proyecto6 from '../Home/ImgHome/proyecto6.png'
import "./Mesero.css"
import Desayunos from '../Desayuno/Desayuno'
import Almuerzo from '../Almuerzo/Almuerzo';
import Navegacion from '../../Navegacion';
import {store} from '../../firebaseconfi'
import { useHistory } from "react-router-dom";
import uuid from 'react-uuid'

const Mesero = () => {
    const [tipo, setTipo] = useState('Desayuno');
    const [listaCarrito, setListaCarrito] = useState([]);
    const history = useHistory();

    const agregarHandler = (obj) => {
        console.log("desde padre", obj);
        setListaCarrito(listaCarrito.concat(obj))
    }

    const borraHandler = (indice) => {
        console.log("borrando:", indice, listaCarrito)
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

   const deleteOrder = () => {
        window.location.href = window.location.href; 
}

    const sendKitchen = () => {
        const inputMesero = document.getElementById("mesero");
        const inputMesa = document.getElementById("mesa");
        const inputCliente = document.getElementById("cliente");
        const date = new Date();
        const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${
          date.getFullYear()}`;
        const hora= `${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${
          (`00${date.getSeconds()}`).slice(-2)}`;
        if(inputCliente.value.length === 0 || inputMesa.value.length === 0 || inputMesero.value.length === 0)
        {
            alert('Faltan datos por ingresar');
        }else{
            store.collection('orden').add({
                mesero: inputMesero.value,
                mesa: inputMesa.value,
                cliente: inputCliente.value,
                created: "Fecha: " + fecha + " ;  Hora: " + hora,
                state:'Pendiente',
                id: uuid(),
                pedido:  listaCarrito.map(elemento => elemento.cantidad + "   " + elemento.titulo ),
            
            }).then(()=>{
                alert('Pedido enviado a cocina');
                window.location.href = window.location.href; 
                })
            }
    }


    return (
        <div className="Mesero">
            <div className="Mesero-header">
                <img className="Logo-Mesero" src={proyecto6} alt="" />
                <button  className="btnReturn" onClick={()=> history.goBack()}>Volver</button>
            </div>
            <div className="Mesero-body">          
                <div className="Mesero-datos">
                    <input className="input-mesero" type="text" placeholder="Mesero" id="mesero" required/>
                    <input className="input-mesa" type="text" placeholder="N° de mesa" id="mesa" required />
                    <input className="input-cliente" type="text" placeholder="Cliente" id="cliente" required />
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
                            <button className="enviar-cocina" onClick={()=>sendKitchen()}>  Enviar a Cocina</button>
                            <button className="cancelar-pedido" onClick={()=>deleteOrder()} >Cancelar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Mesero;