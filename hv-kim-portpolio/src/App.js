import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Experience from './components/Experience';
import Project from './components/Project';
import Enjoy from './components/Enjoy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Menu />
        </header>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/exp" exact component={Experience} />
          <Route path="/pro" exact component={Project} />
          <Route path="/enj" component={Enjoy} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
