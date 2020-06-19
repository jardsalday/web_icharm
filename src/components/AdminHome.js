import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';
import {logout} from '../actions/auth';
import CreatePatient from './CreatePatient';
import {Link,NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AdminModal from './AdminModal';
import AdminCreatePatient from './AdminCreatePatient';


export class AdminPatients extends Component{
  
    render(){
        
        return (
            <div className=" background grey lighten-4">
                <div class="navbar-fixed">
                            <nav class="nav-wrapper white blue-text text-darken-4 text-darken-4">
                            <div class="container">
                                <a href="#" class="brand-logo blue-text text-darken-4">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/adminhome" className="btn blue darken-4 white-text text-darken-1" ><span className="glyphicon glyphicon-home"></span>Home</NavLink></li>
             			<li> <Link to ="/adminpatients" className="blue-text text-darken-4" ><span className=" blue-text text-darken-4 glyphicon glyphicon-th-list"></span>Patients Records</Link></li>
                   <li> <Link to ="/adminmedics" className="blue-text text-darken-4"  ><span className="glyphicon glyphicon-globe blue-text text-darken-4"></span>Medics Records</Link></li>
                   <li><NavLink to ="/medicprofile" className="blue-text text-darken-4" ><span className=" blue-text text-darken-4 glyphicon glyphicon-user"></span> Profile</NavLink></li>
<li><a onClick={this.props.logout.bind(this)} href="/login" class="blue-text text-darken-4"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/adminpatients">Patient Records</Link></li>
            			<li> <Link to ="/adminmedics">Medical Workers</Link></li>
                                <li><a onClick={this.props.logout.bind(this)} href="/login" class="btn white red-text"> Logout</a></li>
                        </ul>
                <br></br>
                         
                         
                

            

         
               
            </div>
        );


    }




}

export default connect(null,{logout})(AdminPatients);
