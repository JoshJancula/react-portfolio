import React, { Component } from 'react';
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

class App extends Component {
  render() {
    return (
     <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route exact path="/resume" component={Resume}/>
   
    </Switch>
    </Router>
    );
  }
}

export default App;
