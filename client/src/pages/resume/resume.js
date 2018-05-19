import React, { Component } from "react";
import "./style.css";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sideBar";
import ResumeContent from "../../components/resumeContent";

class Resume extends Component {

    render() {
        return (
            <div>
              <Navbar />  
            <div className='container-fluid' id='mainContent'>
              <div className='row'>
                <div className='col-lg-8 col-md-12 col-xs-12 col-sm-12'>
                <div className='panel' id='contentPanel'>
                        <ResumeContent />
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

export default Resume;