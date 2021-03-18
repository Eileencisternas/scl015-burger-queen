import React from 'react'
import Almuerzo from '../Almuerzo/Almuerzo'
import Desayuno from '../Desayuno/Desayuno'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
       
    } from 'react-router-dom'


const OpcionesMesero = () => {


    return (
        <div>
        <Router>
            <Link to="Mesero/Desayuno" >Desayuno</Link>
            <Link to="Mesero/Almuerzo">Almuerzo</Link> 
        </Router>
    
        </div>
    )

}

export default OpcionesMesero;