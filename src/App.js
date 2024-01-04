import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Logged from './Stacks/Logged/Logged';
import Auth from './Stacks/Auth/Auth';

function App() {
  let logged = !true;

  return (
    <BrowserRouter>
      {logged ? <Auth /> : <Logged />}
    </BrowserRouter>
  );
}

export default App;
