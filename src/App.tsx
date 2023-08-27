import  React, {useState, useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';
import DataDisplay from './Components/DataDisplay';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import AddContact from './Pages/AddContact';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home /> }/>
          <Route path='data-display' element={<DataDisplay />} />
          <Route path='addcontacts' element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
