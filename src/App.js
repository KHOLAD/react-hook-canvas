import React from 'react';
import './App.css';
import { MainContainer } from "./components/main-container";

function App() {
  return (
    <div className="m-10 flex flex-col items-center flex container mx-auto">
        <h1 className="m-8 font-bold">Whats on the image?</h1>
        <MainContainer />
    </div>
  );
}

export default App;
