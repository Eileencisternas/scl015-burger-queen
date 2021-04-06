import React from "react";
import { store } from "../../firebaseconfi";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import proyecto6 from "../Home/ImgHome/proyecto6.png";
import "./Cocina.css";


const CocinaPedidos = () => {
  const [data, setData] = useState([]);
  const [preparacion, setPreparacion] = useState('');
  const history = useHistory();

  useEffect(() => {
    store.collection("orden").get()
      .then((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push(doc.data());
        });
        setData([...docs]);
      });

  }, []);

  // console.log(data, "data");

  // const PendienteToPrepare = () =>{
  //  const prepare=  store.collection('orden').doc(data.id);
  //   return prepare.update({
  //     state:'Preparacion'})
  //     .then(() => {
  //       alert('pedido a preparacion')
  //     })
  //     .catch(() => {
  //     });
  // }

  const PendienteToPrepare = () =>{
    console.log(data, "data")
    console.log(data, "data")
    store.collection('orden').doc(data()).update({
      state:'Preparacion',

    });
  }

  return (
    <div>
      <div className="Mesero-header">
        <img className="Logo-Mesero" src={proyecto6} alt="" />
        <button className="btnReturn" onClick={() => history.goBack()}>Volver</button>
      </div>
      <div className="bodyCocina">
        <div>
          <p>Pedidos Pendientes</p>
                    {data.length ? (
            data.map((docs) => (
              
              <div className="boxOrden" key={docs.id}>
                <p>{docs.pedido}</p>
                <button onClick={()=>PendienteToPrepare()}>enviar a preparacion</button>
              </div>
            ))
          ) : (
            <p>No hay pedido aún.</p>
          )}
        </div>

        <div>
          <p>Pedidos en Preparción</p>
          {/* {data.length ? (
            data.map((docs) => (
              <div className="boxOrden" key={docs.id}>
                <p>{docs.pedido[0]}</p>
                <button>enviar a pedidos listos</button>
              
              </div>
            ))
          ) : (
            <p>No hay pedido aún.</p>
          )} */}
        </div>

        <div>
          <p>Pedidos Listos</p>
          {data.length ? (
            data.map((docs) => (
              <div className="boxOrden" key={docs.id}>
                <p>{docs.pedido[0]}</p>
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
