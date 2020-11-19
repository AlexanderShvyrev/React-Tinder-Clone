import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TinderCards from './components/TinderCards/TinderCards';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
  return (

    //BEM class naming convention
    <div className="app">
      {/* header */}
      <Header />
      {/* tinder cards */}
      <TinderCards />
      {/* swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
