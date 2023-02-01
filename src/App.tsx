import React from 'react';
import './App.scss';
import  HalfTransparentBorder  from './components/01_HalfTransparentBorder';
import MultipleBorders from './components/02_MultipleBorders';
import ExtendedBgPosition from './components/03_ExtendedBgPosition';
import InnerRounding from './components/04_InnerRounding';
import Stripes from './components/05_Stripes';

function App() {
  return (
    <div className="app">
      <HalfTransparentBorder/>
      <MultipleBorders/>
      <ExtendedBgPosition/>
      <InnerRounding/>
      <InnerRounding onlyOne/>
      <Stripes />
      <Stripes type='horizontal'/>
      <Stripes type='vertical'/>
      <Stripes type='diagonal'/>
      <Stripes type='diagonal_60'/>
      <Stripes type='subtle'/>
    </div>
  );
}

export default App;
