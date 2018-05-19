import React from 'react';
import "./style.css";

export default class PortfolioItem extends React.Component {
    
    render() {
    return (
        <div className='panel'>
            <div className='panel-body center-align'>
              <a href={this.props.link}><img className='portfolioImage' alt={this.props.id} src={this.props.image} /></a><br />
            <div className='btn-group'><button type='button' className='btn btn-info dropdown-toggle portfolioButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>{this.props.name}<span className='caret'></span></button><ul className='dropdown-menu'><li>{this.props.summary}</li> </ul></div>
            </div>
        </div>
    )
    }
    
}