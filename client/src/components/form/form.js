import React from 'react';
import "./style.css";
import API from '../../utilities/API';

export default class Form extends React.Component {
    
    state= {
    name: "",
    email: "",
    message: ""
  };
  
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("about to handleFormSubmit")
    const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(!re.test(String(this.state.email).toLowerCase())){
      // alert("please use a valid email");
      return;
    };
    console.log('name: ' + this.state.name + ' email: ' + this.state.email + ' message: ' + this.state.message)
    API.sendEmail("Email: '" + this.state.email + "' |   Name: '" + this.state.name + "' |  Message: '" + this.state.message + "' ")
    this.setState({
      name: "",
      email: "",
      message: ""
    });
    alert("Thanks, I'll get back to you as soon as possible");
  };
  
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  
    render() {
    return (
       <div>
       <form>
                <div className="form-group">
                    <label for="name"> Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required maxlength="50" placeholder='John Smith' onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="email"> Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required maxlength="50" placeholder="john@example.com" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="name"> Message:</label>
                    <textarea className="form-control" type="textarea" name="message" id="message" placeholder="Your Message Here" maxlength="6000" rows="7" onChange={this.handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-success pull-right" id="btnContactUs" onClick={this.handleFormSubmit}>Submit</button>
         </form>
         </div>
        
        
        )
    }
}
       
            
                  