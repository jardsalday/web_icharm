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
import { CSSTransitionGroup } from 'react-transition-group';

export class MeasureAdd extends Component{
  constructor(props){
    super(props)
   
    this.state = {
        patientOne:""


  }
}

  componentDidMount(){
    const patientID = this.props.match.params.patientID; 
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const ID = params.get('id');
    const systolic1 = params.get('sys');
    const height1 = params.get('height');
    const weight1 = params.get('weight');
    const cholesterol1 = params.get('chol');
    const birthdate1 = params.get('bday');
    const created_at1 = params.get('created_at')
    //this.setState({id_number:ID,systolic:systolic,diastolic:diastolic,pulse:pulse,weight:weight,cholesterol:cholesterol,nurse_in_charge:nurse_in_charge})
    const measures = {id_number:ID,systolic:systolic1,height:height1,weight:weight1,cholesterol:cholesterol1,birthdate:birthdate1,created_at:created_at1};
    axios.post(`http://192.168.1.12:8000/api/measurement/`,measures).then(res=>{this.setState({patientOne:"Success"})});
  }
  
    paginate =(pageNumber) => this.setState({currentPage:pageNumber});
    render(){
     
      

        return (
            <div>
            {this.state.patientOne}
                </div>
        );


    }




}


export default MeasureAdd;
/**
  */