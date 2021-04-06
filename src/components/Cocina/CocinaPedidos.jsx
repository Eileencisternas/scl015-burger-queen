import React, { useDebugValue } from "react";
import { store } from "../../firebaseconfi";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import proyecto6 from "../Home/ImgHome/proyecto6.png";
import "./Cocina.css";
import uuid from 'react-uuid'


const CocinaPedidos = () => {
  const [data, setData] = useState([]);
  const [preparacion, setPreparacion] = useState([]);
  const [terminado, setTerminado] = useState([]);
  const history = useHistory();
  const date = new Date();
  const fecha = `${(`00${date.getDate()}`).slice(-2)}/${(`00${date.getMonth() + 1}`).slice(-2)}/${
    date.getFullYear()}`;
  const hora= `${(`00${date.getHours()}`).slice(-2)}:${(`00${date.getMinutes()}`).slice(-2)}:${
    (`00${date.getSeconds()}`).slice(-2)}`;

  useEffect(() => {
    store.collection("orden").get()
      .then((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          if(doc.exists){
            docs.push(doc.data());
          }
         
        });
        setData([...docs]);
      });

  }, []);


  const PendienteToPrepare = (docs, value) =>{
     if(docs.id === value){
      store.collection('preparacion').add({
        mesero: docs.mesero,
        mesa: docs.mesa,
        cliente: docs.cliente,
        created: docs.created,
        HoraPreparacion: "Fecha: " + fecha + " ;  Hora: " + hora,
        state:'Preparación',
        idPedido: docs.id,
        id: uuid(),
        pedido:  docs.pedido,
    
    }).then(()=>{
        alert('Pedido enviado a preparación');
      
       store.collection('orden').where("id", "==", value)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         
          doc.ref.delete().then(() => {
            window.location.href = window.location.href; 
          }).catch((error) => {
            console.error('Error removing document: ', error);
          });
        });
      });
    })
   
    }
  }
  useEffect(() => {
    store
      .collection("preparacion")
      .get()
      .then((querySnapshot) => {
        const pedido = [];
        querySnapshot.forEach((doc) => {
          pedido.push(doc.data());
        });
        setPreparacion([...pedido]);
      });

  }, []);
  const prepareToFinish = (docs, value) =>{
    if(docs.id === value){
     store.collection('terminado').add({
       mesero: docs.mesero,
       mesa: docs.mesa,
       cliente: docs.cliente,
       created: docs.created,
       HoraPreparacion: docs.HoraPreparacion,
       HoraTerminado: "Fecha: " + fecha + " ;  Hora: " + hora,
       state:'Terminado',
       idPedido: docs.idPedido,
       id: uuid(),
       pedido:  docs.pedido,
   
   }).then(()=>{
       alert('Pedido enviado a Terminado');
     
      store.collection('preparacion').where("id", "==", value)
     .get()
     .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
        
         doc.ref.delete().then(() => {
           window.location.href = window.location.href; 
         }).catch((error) => {
           console.error('Error removing document: ', error);
         });
       });
     });
   })
  
   }
 }
 useEffect(() => {
  store
    .collection("terminado")
    .get()
    .then((querySnapshot) => {
      const finish = [];
      querySnapshot.forEach((doc) => {
        finish.push(doc.data());
      });
      setTerminado([...finish]);
    });

}, []);
  return (
    <div>
      <div className="Mesero-header">
        <img className="Logo-Mesero" src={proyecto6} alt="" />
        <button className="btnReturn" onClick={() => history.goBack()}>Volver</button>
      </div>
      <div className="bodyCocina">
        <div className="btnPendiente">
          <p className="tituloPedidos">Pendientes</p>
                    {data.length ? (
            data.map((docs) => (
              
              <div className="boxOrden" key={docs.id}>
                <p>Cliente:{docs.cliente}</p>
                 <div>
                   
                  {docs.pedido.map((doc) => 
                   <p> {doc}</p>
                    )}
                
                 </div>
                <button className="btnEnvioOrden" value={docs.id} onClick={ (e) => PendienteToPrepare(docs, e.target.value)}>enviar a preparacion</button>
              </div>
            ))
          ) : (
            <p>No hay pedido aún.</p>
          )}
        </div>

        <div className="btnPreparacion">
          <p className="tituloPedidos">En Preparación</p>
          {preparacion.length ? (
            preparacion.map((dos) => (
              <div className="boxOrden" key={dos.id}>
              <p>Cliente: {dos.cliente}</p>
               <div>
                 
                {dos.pedido.map((doc) => 
                 <p> {doc}</p>
                  )}
              
               </div>
              <button className="btnEnvioOrden" value={dos.id} onClick={ (e) => prepareToFinish(dos, e.target.value)}>Enviar a Terminado</button>
            </div>
            ))
          ) : (
            <p>No hay pedido aún.</p>
          )}
        </div>

        <div className="btnListo">
          <p className="tituloPedidos">Terminado</p>
          {terminado.length ? (
             terminado.map((end) => (
              <div className="boxOrden" key={end.id}>
              {/* <p>id: {end.idPedido}</p> */}
              <p>cliente: {end.cliente}</p>
              <p>mesa: {end.mesa}</p>
              <p>mesero: {end.mesero}</p>
               <div className="boxOrden">
                 
                {end.pedido.map((doc) => 
                 <p> {doc}</p>
                  )}
              
               </div>
              
            </div>
            ))
          ) : (
            <p>No hay pedido aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CocinaPedidos;
