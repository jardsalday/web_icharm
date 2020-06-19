import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';
import CreatePatient from './CreatePatient';
import {Link,NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AdminModal from './AdminModal';

export class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {addModalShow:false}

    }

    render(){
       let addModalClose = ()=> this.setState({addModalShow:false});
        return (
            <div className=" background grey lighten-3">
                <div class="navbar-fixed">
                            <nav class="nav-wrapper red lighten-2">
                            <div class="container">
                                <a href="#" class="brand-logo">iCHARM</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/patient" className="try" activeClassName="btn white red-text text-lighten-2"><span className="glyphicon glyphicon-align-left"></span>Patient Records</NavLink></li>
            			<li> <NavLink to ="/admin" activeClassName="btn white red-text text-lighten-2"><span className="	glyphicon glyphicon-user"></span>Admin</NavLink></li>
                                <li><a href="/login" class="white-text"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>
                                <li><a href="/" class="btn white red-text">Logout</a></li>
                        </ul>
                <br></br>
                         
                
                <div className="row  ">
                <div className="col s10 offset-s1 background3">
                <h6 className="header-form-text col s11"><span className="glyphicon glyphicon-list"></span>Admin</h6>
                
               
               
                
                <table className="table table-striped table-hover table-condensed" ref={el =>this.el = el} >
                        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Action</th>
            
            </tr></thead>
            <tbody id="myTable">
                <tr>
                    <th>1</th>
                    <th>Ash Ketcum</th>
                    <th>69</th>
                    <th>Helicopter</th>
                    <th>House</th>
                    <th>969696420</th>
                    <th><Link to ="/patientedit" className="btn green lighten-2">View/Update</Link></th>
                </tr>
            
            </tbody>
          </table>
                   
                   
          </div>
          </div>

         
               
            </div>
        );


    }




}

export default Admin;
