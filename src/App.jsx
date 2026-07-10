import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Auth from './components/Auth';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
function App() {
 return (
  <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
  </div>
 );
}
export default App;
