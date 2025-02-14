import { useState, useEffect } from 'react';
import './App.css';
import AppBody from './AppBody/AppBody'; 
import Footer from './Objects/Footer'; 

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenido al calabozo de la perdición...</p>
      </header>
      <AppBody />
      <Footer />
    </div>
  );
}

export default App;
