import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

export class AboutUs extends Component{

    render(){
       
            return (
                    <div className="background-home">
                        
                        <div class="navbar-fixed">
                        <nav class="nav-wrapper white">
                            <div class="container">
                                <a href="#" class="brand-logo blue-text text-darken-4">iCHARM</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><Link to ="/" className="blue-text text-darken-4">Home</Link></li>
                                    <li><Link to ="/product" className="blue-text text-darken-4">Product</Link></li>
                                    <li><Link to ="/aboutus" className="blue-text text-darken-4"><b>About Us</b></Link></li>
                                    <li><Link to ="/contactus" className="blue-text text-darken-4">Contact Us</Link></li>
                                    <li><Link to="/login" className="blue-text text-darken-4">Login</Link></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ="/product">Product</Link></li>
                            <li><Link to ="/aboutus">About Us</Link></li>
                            <li><Link to ="/contactus">Contact Us</Link></li>
                            <li><Link to ="/login">Login</Link></li>
                        </ul>

                        <div class = "center"><h3>The Team</h3></div>
                        
                        <div id = "slidee">
                        <div class="slider">
                                <ul class="slides">
                                    <li>
                                    <img src="https://i.ibb.co/rFBLN82/jaredd-1.png" alt=""/>
                                    <div class="caption right-align">
                                        <h3>Jared Alday</h3>
                                        <h5 class="light grey-text text-lighten-3"><b>Mobile Developer/Lead Designer</b></h5>
                                    </div>
                                    </li>
                                    <li>
                                    <img src="https://i.ibb.co/Z6HHd2c/vincent.png" alt=""/>
                                    <div class="caption left-align">
                                        <h3>Vincent Calingasan</h3>
                                        <h5 class="light grey-text text-lighten-3"><b>Machine Learning/Web Developer</b></h5>
                                    </div>
                                    </li>
                                    <li>
                                    <img src="https://i.ibb.co/z69TWh6/mark-1.png" alt=""/>
                                    <div class="caption right-align">
                                        <h3>Mark Matibag</h3>
                                        <h5 class="light grey-text text-lighten-3"><b>Mobile Developer/QA Manager</b></h5>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                                </div>







                                {/* ---------------------FOOTER */}

                    <div class = "foot white">
                                <footer id = "footerdiv">
                        <div class="footer-copyright white">
            <div class="container blue-text text-darken-4 center">
            <b class = "copy">© iCHARM 2020</b>
            </div>
                </div></footer></div>



                    </div>
                )
                        


                    

            }
}

export default AboutUs;
