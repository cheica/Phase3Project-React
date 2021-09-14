// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import MakeUpEsssentials from './MakeUpEsssentials';
import SuperGlam from './SuperGlam';
import NavBar from './NavBar';

function App() {

  function App() {

    const [users, setUsers] = useState([])
    console.log ("State of Our MakeUp [", myMakeup, "]")
  
    // const [essentialMakeup, setEsssentialMakeUp] = useState([])
    // console.log ("State of Our Essential MakeUp [", essentialMakeup, "]")
  
    useEffect(() => {
    fetch("") 
      .then(response => response.json())
      .then(fetchedUsers => { console.log("From Fetch", fetchedUsers)
  
      setUsers(fetchedUsers)
     
     });
    }, []);
      
    return (<>
     
          
          </>)
  }
    
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
