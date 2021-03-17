import React from 'react'
import proyecto6 from '../Home/ImgHome/proyecto6.png'
import "./Mesero.css"

const Mesero = () => {
    return (
        <div className="Mesero">
            <div className="Mesero-header">
            <img className="Logo-Mesero" src= {proyecto6} alt=""/>
            </div>
            <div className="Mesero-body">
                <div className="Mesero-datos">
                     <input className="input-mesero" type="text" placeholder="Mesero"/>
                     <input className="input-mesa" type="text" placeholder="N° de mesa"/>
                     <input className="input-cliente" type="text" placeholder="Cliente"/>
                </div>
                <div className="Mesero-options">
                    <div className="Mesero-productos">
                       <p>aqui van los botones</p>
                    </div>
                    <div className="Mesero-pedido">
                         <div className="Mesero-listado">
                          <p>aqui va el contenido del pedido</p>
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