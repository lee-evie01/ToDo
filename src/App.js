import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import MuiCheckbox from './components/MuiCheckbox';
import MuiCard from './components/MuiCard';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <h1>To Do</h1> 
        <MuiCard />
        
        <MuiCheckbox />
      </header>
    </div>
  );
}

export default App;
