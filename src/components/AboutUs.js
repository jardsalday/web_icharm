import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
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

                            {/* <AutoplaySlider
                            id="aboutus"
                            // fillParent={true}
                            bullets={false}
                            mobileTouch={true}
                                play={true}
                                cancelOnInteraction={false} // should stop playing on user interaction
                                interval={6000}
                            >
                                <div data-src="https://i.ibb.co/rFBLN82/jaredd-1.png" />
                                <div data-src="https://i.ibb.co/Z6HHd2c/vincent.png" />
                                <div data-src="https://i.ibb.co/z69TWh6/mark-1.png" />
                            </AutoplaySlider> */}
                            <div class = "produkto1 center">
                        
                            </div>
                    <div class = "produkto13 center">
                    
                    <div class="slider">
                   
                    <AutoplaySlider
                        id = "slidee"
                        organicArrows={false}
                        bullets={false}
                        mobileTouch={true}
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={6000}
                        >
                            <div data-src="https://i.ibb.co/YQmphgm/jaredd-1.jpg" />
                                <div data-src="https://i.ibb.co/3dMVCLq/jaredd-1-2.jpg" />
                                <div data-src="https://i.ibb.co/c296Xsc/jaredd-1-1.jpg" />
                        </AutoplaySlider>
                            </div>
                        </div>


                        <div class = "produkto1 center">
                        
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
