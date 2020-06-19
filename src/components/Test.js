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

export class Test extends Component{
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
    const test1 = params.get('test');
    
    //this.setState({id_number:ID,systolic:systolic,diastolic:diastolic,pulse:pulse,weight:weight,cholesterol:cholesterol,nurse_in_charge:nurse_in_charge})
    const measures = {test:test1};
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


export default Test;
/**
  */