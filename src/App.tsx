import React from 'react';
import './App.scss';
import  HalfTransparentBorder  from './components/01_HalfTransparentBorder';
import MultipleBorders from './components/02_MultipleBorders';
import ExtendedBgPosition from './components/03_ExtendedBgPosition';

function App() {
  return (
    <div className="app">
      <HalfTransparentBorder/>
      <MultipleBorders/>
      <ExtendedBgPosition/>
    </div>
  );
}

export default App;
