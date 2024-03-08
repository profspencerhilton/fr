import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Spencer's React Website" />
      <MovieList />
      <Clock />
    </div>
  );
}

export default App;
