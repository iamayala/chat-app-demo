import React from 'react';
import './App.css';
import Chat from './Components/Chat';
import { DataProvider } from './Components/DataProvider';
import Header from './Components/Header';
import Input from './Components/Input';

function App() {
  return (
    <DataProvider>
      <div className="App">
          <Header/>
          <Chat/>
          <Input/>
      </div>
    </DataProvider>
  );
}

export default App;
