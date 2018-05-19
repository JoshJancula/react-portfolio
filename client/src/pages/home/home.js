import React, { Component } from "react";
import "./style.css";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sideBar";

class Home extends Component {

    render() {
        return (
            <div>
              <Navbar />  
            <div className='container-fluid' id='mainContent'>
              <div className='row'>
                <div className='col-lg-8 col-md-12 col-xs-12'>
                    <div className='panel' id='aboutPanel'>
                        <div className='panel-body'>
                        <h2>About Me</h2>
                         <img src='http://www.joshjancula.com/images/joshImage.png' id='joshImage' />
                       <p> 
                      
                       Hello, my name is Josh Jancula and I am from Charlotte, North Carolina. I am a full stack web developer experienced in many web development tools and frameworks including: HTML5, REACT.js, Node.js, and MySQL. I am experienced with Linux systems, system troubleshooting and networking. Please visit my portfolio where you can explore some of my projects.</p>
                        </div>
                        </div>
                </div>
                
                <div className='col-lg-4 col-md-12 col-xs-12'>
                    <SideBar id='sideBar' />
                </div>
              </div>
             </div>
           </div>
        );
    }
}

export default Home;