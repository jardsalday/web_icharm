import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecPatient} from '../actions/assessActions';
import {Link} from 'react-router-dom';
import patient from '../reducers/patient';
import '../App.css'
import { PatientComponent } from './PatientComponent';
import { CreatePatient } from './CreatePatient';
import Assess from './Assess';
import Pagination from './Pagination';
import Graph from './Graph';
import RiskGraph from './RiskGraph';
import { CSSTransitionGroup } from 'react-transition-group';

export class Description extends Component{
  
       
    render(){
    return (
            
            
       <div>     
          

            <div className=" report-card2 white lighten-3">
              <span className="red-text text-lighten-2 fa fa-heart"></span><span className="red-text text-lighten-2 ">HEALTH STATUS</span><br></br> 

              <i>BP:</i><i className="green-text text-lighten-1">HIGH</i><span className="green-text text-lighten-1	glyphicon glyphicon-exclamation-sign"></span><br></br>
              <i>Wt:</i><i className="grey-text text-darken-1 ">NORMAL</i><br></br>
              <i>Chol:</i><i className="grey-text  text-darken-1 ">NORMAL</i><br></br>
              <i>Activity</i><i className="green-text text-lighten-1">QUIT SMOKING</i><span className="green-text text-lighten-1	glyphicon glyphicon-exclamation-sign"></span>
             
              </div>
              <div className="red lighten-2  white-text  red-text  report-card">
                <label className="white-text">CVD RISK:</label>
                <br></br>
                <label className="white-text predict">NEGATIVE</label><br></br>
                <label className="white-text predict_proba">10%</label>
                                                          </div>
        </div>
                      
      
          
                
      
        );


    }




}
const mapStateToProps = state =>({
  assess :state.assess.assess

});

export default connect(mapStateToProps,{getSpecPatient})(Description);