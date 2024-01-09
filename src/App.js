import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Logged from './Stacks/Logged/Logged';
import Auth from './Stacks/Auth/Auth';
import { useEffect, useState } from 'react';
import { getUserData } from './Components/Functions';

function App() {
  const [logged, setLogged] = useState(false)
  
  useEffect(()=> {
    let user = getUserData() 
    console.log(user);
    
    if(user !== null | undefined){
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [])

  return (
    <BrowserRouter>
      {logged ? <Logged /> : <Auth />}
    </BrowserRouter>
  );
}

export default App;
