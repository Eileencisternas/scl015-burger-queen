import React from 'react'
import Desayunos from '../Desayunos/Desayunos'
const Home = () => {
    return (
        <div className="container" >
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
                 

                </div>
                <div className="col">
                    <h2>Monto Total</h2>

                </div>


                </div>         
          

        </div>
    )

}

export default Home;