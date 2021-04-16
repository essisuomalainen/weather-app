import './App.css';
import React from 'react';
import Search from './components/Search/Search.js';

const api = {
  key: '1aeef9314e710b0d8aa7bf74261257ea',
  base: 'https://api.openweathermap.org/data/2.5/',
};
function App() {
  return (
    <div className='App'>
      <Search />
    </div>
  );
}

export default App;
