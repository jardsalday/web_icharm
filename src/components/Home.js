import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export class Home extends Component{

    render(){
       
            return (
                    <div className="background-home">


                        <div class="navbar-fixed">
                            <nav class="nav-wrapper white ">
                            <div class="container blue-text text-darken-4">
                                <a href="#" class="brand-logo blue-text text-darken-4">iCHARM</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><Link to ="/" className="blue-text text-darken-4"><b>Home</b></Link></li>
                                    <li><Link to ="/product" className="blue-text text-darken-4">Product</Link></li>
                                    <li><Link to ="/aboutus" className="blue-text text-darken-4">About Us</Link></li>
                                    <li><NavLink to ="/contactus" className="blue-text text-darken-4" activeClassName="btn white red-text text-lighten-2">Contact Us</NavLink></li>
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
                        <br/><br/><br/>
                        <div class = "productsz">
                        
                        <div class = "produkto1 center">
                        
                            <h3>The Beat Goes On...</h3>
                            <p id = "homequote">
                                "Aaa machine that supports cardiovascular health decision making by providing insights through technological innovations."
                            </p>
                                </div>
                        <div class = "produkto center">
                        
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
                                <div data-src="https://i.ibb.co/Y83FX1M/243d4710de2ef856e754baa04e268563.jpg" />
                                <div data-src="https://i.ibb.co/520vhv3/webmobile.png" />
                                <div data-src="https://i.ibb.co/FVxDvRW/heartyy.jpg" />
                            </AutoplaySlider>
                                </div>
                            </div>
                    


                        </div>
                        




                        

                       
            {/* FOOTER */}

            <div class = "foot white">
                <footer id = "footerdiv">
                    <div class="footer-copyright white">
                    <div class="container blue-text text-darken-4 center">
                        <b class = "copy">© iCHARM 2020</b>
                    </div>
                    </div>
                </footer>
            </div> 
        </div>
                            


                )
                        


                    

            }
}

export default Home;
