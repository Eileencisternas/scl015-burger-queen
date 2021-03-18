
import Home from './components/Home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
  } from 'react-router-dom'
import OpcionesMesero from './components/Mesero/Mesero';
import Desayuno from './components/Desayuno/Desayuno.jsx';
import Almuerzo from './components/Almuerzo/Almuerzo.jsx'


function App() {
  return (
       <Router>
       {/* <Link to="Mesero/Desayuno" >Desayuno</Link>
        <Link to="Mesero/Almuerzo">Almuerzo</Link>  */}
         <Switch>
         <Route exact path="/">
            <Home></Home>
           </Route>
           <Route path="/Mesero" > 
            <OpcionesMesero></OpcionesMesero>
            
           </Route>
           <Route path="/Mesero/Almuerzo"> 
           <OpcionesMesero></OpcionesMesero>
             </Route>

             <Route  exact path="/Mesero/Desayuno" > 
           <Desayuno></Desayuno>
           </Route>
           <Route path="/Mesero/Almuerzo"> 
           <Almuerzo></Almuerzo>
           </Route>
           <Route exact path="/"> 
           <Home></Home>
          </Route>
                     
         </Switch>
       </Router>
  );
}

export default App;
