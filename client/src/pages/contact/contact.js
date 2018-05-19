import React, { Component } from "react";
import "./style.css";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sideBar";
import Form from "../../components/form";

class Contact extends Component {

    render() {
        return (
            <div>
              <Navbar />  
            <div className='container-fluid' id='mainContent'>
              <div className='row'>
                <div className='col-lg-8 col-md-12 col-xs-12'>
                    <div className='panel' id='contactPanel'>
                        <div className='panel-content'>
                        <br />
                        <h2>Contact</h2>
                        <br />
                          <Form />
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

export default Contact;