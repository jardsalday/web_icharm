import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';




export class ContactUs extends Component{


    

    render(){
       
            return (
                    <div class = "background-home">
                        
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
                                    <li><Link to ="/aboutus" className="blue-text text-darken-4">About Us</Link></li>
                                    <li><Link to ="/contactus" className="blue-text text-darken-4"><b>Contact Us</b></Link></li>
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

                        
                        
                        
                        
                        
                        
                        <div class = "contactsheet">

                        <div class = "contactslaman blue-grey darken-4 center">

                        <h4 class = "white-text">We'd love to hear from you!</h4>
                            
                            <form onSubmit={this.submitForm}
                                    action="https://formspree.io/xrgkzdvy"
                                    method="POST">
                                <div class = "row"> 

                                <div class="input-field col s6 white-text">
                                <input type="text" id="name" name = "name"/>
                                <label class="active" for="name">Name</label>
                                </div>

                                <div class="input-field col s6 white-text">
                                <input type="email" id="email" class="validate" name = "email"/>
                                <label class="active" for="email">Email</label>
                                </div>

                                </div>

                                <div class = "row"> 

                                <div class="input-field col s6 white-text">
                                <input type="text" id="name" name = "contact"/>
                                <label class="active" for="name">Contact No.</label>
                                </div>

                                <div class="input-field col s6 white-text">
                                <input type="text" id="name" class="validate" name = "company"/>
                                <label class="active" for="email">Company</label>
                                </div>

                                </div>

                                <div class = "row">

                                <div class="input-field col s12 white-text">
                                <textarea type="email" id="textarea" class="materialize-textarea" name = "message"></textarea>
                                <label class="active" for="textarea">Message</label>
                                </div>

                                </div>
                                <button class="btn waves-effect waves-light green darken-1">Submit</button>

                            </form>
 





                        </div>


                        <div class = "contactslaman1 blue darken-4">

                        <h4 class = "white-text">Contact Information</h4><br/>
                            
                            <div class = "row">
                            <i class="material-icons white-text col">place</i><div class = "white-text col"><label class = "white-text thin">
                                Mt. View Park Subd., Batangas City</label></div><br/>
                            </div>

                            <div class = "row">
                            <i class="material-icons white-text col">phone</i><div class = "white-text col"><label class = "white-text thin">
                                09360568625</label></div><br/>
                            </div>

                            <div class = "row">
                            <i class="material-icons white-text col">local_post_office</i><div class = "white-text col"><label class = "white-text thin">
                                contactus.icharm@gmail.com</label></div><br/>
                            </div>

                            <div class = "row">
                            <img class = "col ml" src="https://i.ibb.co/DQRxZFg/twitter-24-1.png" alt=""/>
                            <div class = "white-text col"><label class = "white-text thin">@iCHARMPH</label></div><br/>
                            </div>
                            
        
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





export default ContactUs;


