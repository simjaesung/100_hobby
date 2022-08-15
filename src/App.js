import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import MBTIsrart from './component/MBTIstart/MBTIstart';
import MBTItest from './component/MBTItest/MBTItest';
import HobbyQ from './component/MBTIresult/HobbyQ';
import Hobbyresult from './component/hobbyResult/Hobbyresult';
import data from './MBTIQ.js';
import { useState } from 'react';
import Category from './component/hobbyQ/Category';

function App() {
  let [MBTIq, setMbtiq] = useState(data);
  return (
    <div className='containers'>
      <Routes>
        <Route path='/' element={<MBTIsrart/>} />
        <Route path='/mbti-test/:id' element={<MBTItest MBTIq = {MBTIq}/>} />
        <Route path='/hobbyQ/:id' element={<HobbyQ/>} />
        <Route path='/hobby-people' element ={<Category/>}/>
        <Route path='/hobby-inout' element ={<Category/>}/>
        <Route path='/hobby-weather' element ={<Category/>}/>
        <Route path='/hobby-result' element ={<Hobbyresult/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
