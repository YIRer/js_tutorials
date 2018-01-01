import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SwitchDemo from './SwitchDemo';
import './App.css';

class App extends Component {
  render() {
    const active = {textDecoration:'none', cursor:'defalut',color:'gray'};
    const defaultStyle = {
      margin : '5px'
    };
    return (
      <div className="App">
        <NavLink 
          exact 
          style={defaultStyle} 
          activeStyle={active} 
          to="/" >
            Home
        </NavLink>
        <NavLink 
          exact 
          style={defaultStyle} 
          activeStyle={active} 
          to="/About" >
            About
        </NavLink>
        <div
          style={{fontSize:'3em',margin:'25px'}}
        >
          <SwitchDemo />
        </div>
      </div>
    );
  }
}

export default App;
