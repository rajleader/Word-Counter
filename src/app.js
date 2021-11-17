
 import SubCompo from './component/SubCompo';
import { useState } from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
    const [text, setText] = useState('Enable Dark Mode')
    
    const [mode, setMode] = useState('rgb(181, 181, 209)')
    let toggleMode=()=>{
     if(mode==='rgb(181, 181, 209)'){
     setMode('#343a40')
     document.body.style.backgroundColor='#343a40';
     document.body.style.color='white';
     setText('Disable Dark Mode')
    
     }
     else{
         setMode('rgb(181, 181, 209)')
         document.body.style.backgroundColor='rgb(181, 181, 209)';
         document.body.style.color='black';
         setText('Enable Dark Mode')
     }
    }
    return(
        <>
        <Router>
        <Navbar mode={mode} textMode={text} changeMode={toggleMode}/>
         <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/home">
          <SubCompo  title='Word Counter'  mode={mode} changeMode={toggleMode}/>
          </Route>
          <Route exact path="/contact">
            <Contact mode={mode} />
          </Route>
        </Switch>
        </Router>
        </>
    );
}
export default App;