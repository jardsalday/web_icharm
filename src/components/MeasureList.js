import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';
import CreatePatient from './CreatePatient';
import {Link} from 'react-router-dom';

export class MeasureList extends Component{
    state={
        patientMeasures:[]
    }
   
    componentDidMount(){
        const patientID = this.props.match.params.id; 
        
        axios.get('http://icharmapi.herokuapp.com/api/measurement/').then(res=>{this.setState({patientMeasures:res.data})})
          
      }
    
  

    render(){
       
        return (
            <div>
                
                 {JSON.stringify(this.state.patientMeasures.sort((a,b)=>a.created_at-b.created_at),null,2)}
               
         
               
            </div>
        );


    }




}

export default MeasureList;
