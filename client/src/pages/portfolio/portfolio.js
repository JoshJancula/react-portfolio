import React, { Component } from "react";
import "./style.css";
import Navbar from "../../components/navbar";
import SideBar from "../../components/sideBar";
import portfolioItems from "../../data/portfolio.json";
import PortfolioItem from "../../components/portfolioItem";

class Portfolio extends Component {

    state = {
      portfolioItems: portfolioItems
  };
        
    render() {
        return (
            <div>
              <Navbar />  
            <div className='container-fluid' id='mainContent'>
              <div className='row'>
                <div className='col-lg-8 col-md-12 col-xs-12'>
                    <div className='panel' id='content'>
                        <div className='panel-body center-align'>
                        <h2>Portfolio</h2>
                         {this.state.portfolioItems.map(portfolioItem => (
                                // and make a card for each one
                                <PortfolioItem // then assign these attributes
                                name={portfolioItem.name}
                                image={portfolioItem.image}
                                link={portfolioItem.link}
                                summary={portfolioItem.summary}
                                />
                          )
                          )
                          }

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

export default Portfolio;