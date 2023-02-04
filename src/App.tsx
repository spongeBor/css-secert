import React from 'react';
import './App.scss';
import  HalfTransparentBorder  from './components/01_HalfTransparentBorder';
import MultipleBorders from './components/02_MultipleBorders';
import ExtendedBgPosition from './components/03_ExtendedBgPosition';
import InnerRounding from './components/04_InnerRounding';
import Stripes from './components/05_Stripes';
import ComplexBg from './components/06_ComplexBg';
import FakeRandomBg from './components/07_FakeRandomBg';
import ContinuousImageBorder from './components/08_ContinuousImageBorder';
import Ellipse from './components/09_Ellipse';
import Parallelograms from './components/10_Parallelograms';
import Diamond from './components/11_Diamond';

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
      <ComplexBg type='tablecloth'/>
      <ComplexBg type='mesh'/>
      <ComplexBg type='blueprint'/>
      <ComplexBg type='polka'/>
      <ComplexBg type='checkerboard'/>
      <FakeRandomBg/>
      <ContinuousImageBorder />
      <ContinuousImageBorder type='vintage_envelope'/>
      <ContinuousImageBorder type='marching_ants'/>
      <Ellipse/>
      <Ellipse type='half'/>
      <Ellipse type='quarter'/>
      <Parallelograms/>
      <Diamond type='images'/>
      <Diamond type='clip'/>
    </div>
  );
}

export default App;
