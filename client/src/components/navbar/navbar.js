import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom'


export default class Navbar extends React.Component {
    
    
    render() {
    return (
   <nav className="navbar navbar-inverse navbar-default" role="navigation">
  <div className="container-fluid">
  
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" to="/home">Josh Jancula</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/resume'>Resume</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
    )
    }
    
}