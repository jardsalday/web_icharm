import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Testing extends Component{

    render(){
       
            return (
                    <div>
                        
                        
  <div class="navbar-fixed">
    <nav class="nav-wrapper indigo">
      <div class="container">
        <a href="#" class="brand-logo">Site Title</a>
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="" class="btn white indigo-text">Login</a></li>
        </ul>
      </div>
    </nav>
  </div>

  <ul class="sidenav" id="mobile-links">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
  </ul>

                 



                    </div>
                )
                        


                    

            }
}

export default Testing;
