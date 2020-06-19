import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';
import {Link} from 'react-router-dom';
import patient from '../reducers/patient';
import '../App.css'

export class Assess extends Component{
   
    render(){
      
        return (
            <div>
              
                {
              
              this.props.assess.slice(this.props.indexOfFirstPost,this.props.indexOfLastPost).map(assess =>(
                 
                 <div key={assess.id}>
                  <div className="col s4"><label id="label1">Complaints</label><div className="card-panel" id="orange1">{assess.complaints}</div></div>
                  <div className="col s4"><label id="label2">Assessment</label><div className="card-panel " id="medyoOrange1">{assess.assessment1}</div></div>
                  <div className="col s4"><label id="label3">Prescription</label><div className="card-panel" id="diOrange1">{assess.prescriptions}</div></div>
                  </div>

              ))}
              
      </div>
        );


    }




}

export default Assess;