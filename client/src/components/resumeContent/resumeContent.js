import React from 'react';
import "./style.css";

export default class ResumeContent extends React.Component {

    render() {
        return (

            <div>
            
          
                        <div className='container-fluid'>
                <h2>Resume</h2>
                    <div className='row text-center'>
                        <a href="https://docs.google.com/document/d/1JldTXJ4BxJ3PvEQtkoVlNO_AcxSAy_zcx73RYLKo-pc/export?format=pdf">Click here for a copy!</a>
                        <h1>Josh Jancula</h1>
                        <h6><a href="josh@jancula.com">josh@jancula.com</a> | 704-277-2181 | Charlotte, North Carolina</h6>
                        <h6><a href="https://github.com/JoshJancula">GitHub Repo</a> | <a href="https://www.linkedin.com/in/josh-jancula-26703114a">LinkedIn Profile</a> | <a href="https://www.joshjancula.com">Materialize Portfolio</a></h6>

                            <p> I am a full stack developer with a passion for problem solving and helping others. I am experienced in many web development tools and frameworks including: HTML5, REACT.js, Node js, and MySQL. In my free time I enjoy
                                learning new languages, libraries and frameworks.

                            </p>
                    </div>
                    <div className="row">
                        <h3>Skills</h3>
                        <div className="row">
                           <div className='col-lg-1 col-xs-0'></div>
                            <div className="col-lg-5 col-xs-5">
                                <ul>
                                    <li>Javascript</li>
                                    <li>HTML5</li>
                                    <li>MongoDB</li>
                                    <li>React.js</li>
                                    <li>MySQL</li>
                                    <li>Node.js</li>
                                    <li>CSS3</li>
                                </ul>
                            </div>
                      <div className='col-lg-1 col-xs-0'></div>
                            <div className="col-lg-5 col-xs-7">
                                <ul>
                                    <li>Logistics</li>
                                    <li>Scheduling</li>
                                    <li>Debugging</li>
                                    <li>Linux</li>
                                    <li>System troubleshooting</li>
                                    <li>Github</li>
                                    <li>AJAX and RESTful API’s</li>
                                </ul>
                            </div>

                        </div>

              
                        <h3>Education </h3>
                        <h5>University of North Carolina Charlotte </h5>

                        <p> Graduated January 2018<br />Coding Boot camp - Full Stack Web Development <br /> An intensive boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap,
                            Firebase, Node Js, MySQL, MongoDB, Express, Handlebars JS, & React Js.
                        </p>

                        <h3>Applications Built</h3>


                        <h5>Jam-Clash</h5>
                        <p>An app which helps musicians connect with other local musicians who are either looking to fulfill a position in a band or just get together and jam. Users are able to search multiple parameters to meet their specifications
                            and message with other users.<br />
                            Technologies used in the development of this application include:  Materialize CSS for a responsive front end framework. We were able to triangulate the location of users by implementing the Haversine formula with javascript. For the backend we used node.js to create an express server.  There are three separate databases fueling this application. The Sequelize database stores all user information and uses the passport npm for user authentication along with Bcrypt to hash the passwords. This database also stores a link to a firebase database where all user profile images are stored. MongoDB is used for the ‘Music News’ page, which is populated with articles scraped from NPR.org using the cheerio npm.

                            

                            <br /> -Backend developer.
                            <br />
                            <a href="https://jam-clash.herokuapp.com/login">Jam-Clash</a>
                        </p>
                        <br />

                        <h5>Clicky</h5>
                        <p>A fun South Park themed memory game built with React.js. The objective of the game is to get all 16 characters without clicking the same one twice.<br />
                        Technologies used in the development of this application include: React.js and Bootstrap.

                            <br /> -Sole developer
                            <br />
                            <a href="https://j-clicky-game.herokuapp.com/">Clicky-Game</a>
                        </p>
                        <br />

                        <h5>Fridge to Plate</h5>
                        <p>
                            An app that helps a user find a delicious new recipe with just the ingredients in their refrigerator. The user searches with the ingredients they have and the app generates a list of potential recipes and videos on how to make those recipes. Users are
                            also able to create an account and save recipes.<br />
                            Technologies used in the development of this application include: Materialize CSS for a responsive front end framework. Spoonacular API to retrieve recipes based on the ingredients provided by the user. YouTube API to fetch a tutorial video on how to make a particular recipe that a user has selected. Node.js was used to create an express server. There is a Sequelize database which stores all user information including their saved recipes. This database uses passport npm for user authentication and Bcrypt to hash the passwords.

                            <br /> -Lead developer.
                            <br />
                            <a href="https://fridge2plate.herokuapp.com/">Fridge to Plate</a>
                        </p>



                        <br />
                        <h3>Additional Work Experience </h3>
                        <h5>Midwood Smokehouse, Charlotte, NC— Prep/ Line</h5>
                        <p>
                            August 2017 - Present
                            <br /> Part time job while attending school.
                        </p>
                        <br />
                        <h5>Atlantic Dealer Services, Charlotte, NC — Technician </h5>

                        <p>January 2011 - July 2017 <br />Logistically coordinated services and installation as well as parts manufacturing for 200 accounts (locations) in Charlotte and the surrounding areas. Installed parts and custom painted details
                            on new and repaired cars.
                        </p>
                        </div>
                       
            </div>
        </div>



        )
    }
}
