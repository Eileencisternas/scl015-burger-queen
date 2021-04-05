import Home from './components/Home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  } from 'react-router-dom'
import Mesero from './components/Mesero/Mesero';
import CocinaPedidos from './components/Cocina/CocinaPedidos'


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
           <Route path="/CocinaPedidos" > 
            <CocinaPedidos></CocinaPedidos>
           </Route>

           </Switch>
       </Router>
  );
}

export default App;
