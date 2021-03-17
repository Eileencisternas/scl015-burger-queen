// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  } from 'react-router-dom'
import Almuerzo from './components/Almuerzo/Almuerzo';
import Home from './components/Home/Home';

function App() {
  return (
       <Router>
         <Link to="/"></Link>
         <Link to="/Home" >Mesera</Link>
         <Link to="/Almuerzo">Cocina</Link>
         <Switch>
         <Route exact path="/">
       
           </Route>
           <Route path="/Home" > 
            <Home></Home>
            
           </Route>
           <Route path="/Almuerzo"> 
           <Almuerzo></Almuerzo>
            
           </Route>
           
         </Switch>
       </Router>
  );
}

export default App;
