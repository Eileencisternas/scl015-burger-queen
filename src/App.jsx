import Home from './components/Home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  } from 'react-router-dom'
import Mesero from './components/Mesero/Mesero';
// import Almuerzo from './components/Almuerzo/Almuerzo';

function App() {
  return (
       <Router>
          <Switch>
         <Route exact path="/">
            <Home></Home>
           </Route>
           <Route path="/Mesero" > 
            <Mesero></Mesero>
           </Route>
           {/* <Route path="/Mesero/Almuerzo"> 
           <Almuerzo></Almuerzo>
           </Route>
        <Route path="/Almuerzo">
          <Almuerzo></Almuerzo>

        </Route> */}
         </Switch>
       </Router>
  );
}

export default App;
