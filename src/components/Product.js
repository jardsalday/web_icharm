import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
export class Product extends Component{

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
                                    <li><Link to ="/product" className="blue-text text-darken-4"><b>Product</b></Link></li>
                                    <li><Link to ="/aboutus"className="blue-text text-darken-4">About Us</Link></li>
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
                        


                        <div class = "center"><h3>Products</h3></div>

                        <div class = "productsz">
                            {/* white */}

                        <div class = "produkto center">
                        <div><img src = "https://i.ibb.co/WxytVcB/macintosh-imac-g3-computer-monitor-white-imac-1.png" alt = "iCHARM Web" id = "webimg"></img></div>
                            <h4>Web Application</h4>
                            <p><b>
                                The perfect application Doctors and other Medical Professionals to help them with decision making regarding Cardiovascular Diseases
                                </b></p>
                                </div>
                        <div class = "produkto center">
                        <div><img src = "https://i.ibb.co/pQs0p7z/icharmchair.png" class="productimg" alt = "iCHARM Device"></img></div>
                            <h4>iCHARM Device</h4>
                            <p><b>
                                Consisted of a Blood Pressure Monitor, Seated Weighing Scale, and a Glucometer to take the health measurements that are important for determing a patients CVD Risk
                                </b></p>
                            </div>
                        <div class = "produkto center">
                            <div><img src = "https://i.ibb.co/9cWwz4T/mobileproduct.png" alt = "iCHARM Mobile"></img></div>
                            <h4>Mobile Application</h4>
                            <p><b>
                                Monitor your Cardiovascular Disease risk factors anywhere you go with the iCHARM Mobile App!
                                </b></p>
                            <a href = "" class = "blue-text">Download Now!</a>
                            </div>


                        </div>


                        {/* ---------------------FOOTER */}

               <div class = "foot white">
                                <footer id = "footerdiv">
                        <div class="footer-copyright whhite">
            <div class="container blue-text text-darken-4 center">
            <b class = "copy">© iCHARM 2020</b>
            </div>
                </div></footer></div>


                    </div>
                )
                        


                    

            }
}

export default Product;
