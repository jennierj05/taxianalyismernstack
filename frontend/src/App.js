import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Taxi from './pages/Taxi';
import Register from './pages/Register';
import Query1 from './pages/Query1';
import Query2 from './pages/Query2';
import Query3 from './pages/Query3';
import Query4 from './pages/Query4';
import Vehicle from './pages/Vehicle';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/query1' element={<Query1 />} />
          <Route path='/query2' element={<Query2 />} />
          <Route path='/query3' element={<Query3 />} />
          <Route path='/query4' element={<Query4 />} />
          <Route path='/analysis' element={<Taxi/>} />
          <Route path='/vehicle' element={<Vehicle/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;