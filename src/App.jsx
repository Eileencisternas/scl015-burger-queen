// import './App.css';
import Cocina from './components/Cocina/Cocina';
import Home from './components/Home/Home.jsx';
import Desayunos from './components/Desayunos/Desayunos'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom'

function App() {
  return (
       <Router>
        
        <Switch>
          <Route path="/Home">
          <Home></Home>
           </Route>
           <Route path="/Cocina" > 
           <Cocina></Cocina>
           </Route>
           <Route path="/Desayunos" > 
           <Desayunos></Desayunos>
           </Route>
           <Route exact path="/"> 
           <Home></Home>
          </Route>
                     
         </Switch>
       </Router>
  );
}

export default App;
