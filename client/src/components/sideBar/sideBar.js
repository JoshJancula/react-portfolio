import React from 'react';
import "./style.css";

export default class SideBar extends React.Component {
    
    render() {
    return (
 
      <div className='panel'>
       
       <div className='panel-body'>
       <h2 className='text-center'>Connect With Me</h2>
        <div className="row text-center sideConnect">
            <div className="col-lg-4 col-md-4 col-xs-4">
                <a href="https://github.com/JoshJancula"><img src="https://www.freeiconspng.com/uploads/git-github-hub-icon-25.png" className="social" id="gitLogo" alt="GitHub" /></a>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4">
                <a href="https://www.linkedin.com/in/josh-jancula-26703114a"><img src="https://lh3.googleusercontent.com/CLSLxPOLyJ2yYRZve6NdVMqiefos1sBIrN-zDuTYaJfEkzXtIB1o" id="linkedLogo" className="social" alt="LinkedIn" /></a>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4">
                <a href="https://stackoverflow.com/cv/joshjancula"><img src="https://www.hrexaminer.com/wp-content/uploads/2016/10/2016-10-11-hrexaminer-stackoverflow-6-xxl-sq-250px.png" className="social" alt="Stack Overflow" /></a>
            </div>
        </div>
       </div>
    </div>
  
    )
    }
    
}