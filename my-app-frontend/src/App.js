// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import MakeUpEsssentials from './MakeUpEsssentials';
import SuperGlam from './SuperGlam';
import NavBar from './NavBar';

function App() {

  const [makeup, setMakeUp] = useState([])
  console.log ("State of Our MakeUp [", makeup, "]")

  // const [essentialMakeup, setEsssentialMakeUp] = useState([])
  // console.log ("State of Our Essential MakeUp [", essentialMakeup, "]")

  useEffect(() => {
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline") 
    .then(response => response.json())
    .then(makeup => { console.log("From Fetch", makeup)

    setMakeUp(makeup)
   
   });
  }, [])
    
  return (
    <div className="App">
      <header className="App-header"> MakeUp For Coders </header>
      <NavBar/>
  
      <Switch> 

        <Route path= "/home">
           <Home />
          </Route>

         <Route path="/makeupesssentials">
          <MakeUpEsssentials
          />
        </Route>

        {/* <SuperGlam/>  */}
      
      </Switch>
      
    </div>
  );
}

export default App;
