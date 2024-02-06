import logo from './logo.svg';
import './App.css';
import Headersection from './components/Headersection';
import Navsection from './components/Navsection';
import Misiónsection from './components/Misiónsection';
import Marcasection from './components/Marcasection';
import Jackpotsection from './components/Jackpotsection';
import Cosionsection from './components/Cosionsection';
import Nuestras from './components/Nuestras';
import Spinsection from './components/Spinsection';
import Accordionsection from './components/Accordionsection';
import Lanzasection from './components/Lanzasection';
import Footersection from './components/Footersection';
import Backtop from './components/Backtop';
import Preloadersection from './components/Preloadersection';

function App() {
  return (
    <div className='bg-[#00141B]'>
      <Preloadersection />
      <Headersection />
      <Misiónsection />
      <Marcasection />
      <Jackpotsection />
      <Cosionsection />
      <Nuestras />
      <Spinsection />
      <Accordionsection />
      <Lanzasection />
      <Footersection />
      <Backtop />
    </div>
  );
}

export default App;
