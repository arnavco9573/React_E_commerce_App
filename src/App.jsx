import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'


const App = () => {
  return (<div>
    <div className='bg-[#1e1b4b]'>
      <Navbar />
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </div>)
};

export default App;
