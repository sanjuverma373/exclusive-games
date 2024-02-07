import logo from './logo.svg';
import './App.css';
import Headersection from './components/Headersection';
import Backtop from './components/Backtop';
import Preloadersection from './components/Preloadersection';
import { Route, Routes } from 'react-router-dom';
import Logosec from './Pages/Logosec';
import Hogarsec from './Pages/Hogarsec';
import Missionsec from './Pages/Missionsec';
import Tragamonedas from './Pages/Tragamonedas';
import Elegirnos from './Pages/Elegirnos';
import Ofertas from './Pages/Ofertas';

function App() {
  return (
    <div className='bg-[#00141B]'>
      <Preloadersection />
      <Headersection />     
        <Routes>
          <Route path='/' element={<Logosec/>}/>
          <Route path='/hogar' element={<Hogarsec/>}/>
          <Route path='/misión' element={<Missionsec/>}/>
          <Route path='/tragamonedas' element={<Tragamonedas/>}/>
          <Route path='/elegirnos' element={<Elegirnos/>}/>
          <Route path='/ofertas' element={<Ofertas/>}/>
        </Routes>
      <Backtop />
    </div>
  );
}

export default App;
