import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';

export class UpdatePatient extends Component{
  state = {
        name:'',
        age:'',
        sex:'',
        address:'',
        email:'',
        phone_number:''

  }
    static propTypes = {
       
        addPatients:PropTypes.func.isRequired,
        getPatients:PropTypes.func.isRequired
    }
   
    onChange=e=> this.setState({[e.target.name]:e.target.value})

    onSubmit=e=>{
        e.preventDefault();
        const {name,age,sex,address,email,phone_number} = this.state;
        const patrec={name, age, sex, address,email,phone_number};
        this.props.addPatients(patrec);
        


    }
    render(){
        const{name,age,sex,address,email,phone_number} = this.state
        return (<div>
    <h6 className="header-form-text"><span className="glyphicon glyphicon-download-alt"></span>{'   '}Update Patient Record</h6>
            <div className="Form ">
               
                <form onSubmit={this.onSubmit}>
                    <label><h6>Name</h6></label>
                    <input type = "text" name="name" onChange = {this.onChange} value={name}></input>
                    <div className = "row">
                    <div className="col s6">
                    <label><h6>Birthday</h6></label>
                    <input type = "text" name="age" onChange = {this.onChange} value={age}></input>
                    </div>
                    <div className="col s6">
                    <label><h6>Sex</h6></label>
                   
                    <input type = "text" name="sex" onChange = {this.onChange} value={sex}></input>
                    </div>
                    </div>
                    <label><h6>Height</h6></label>
                    <input type = "text" name="email" onChange = {this.onChange} value={email}></input>
                    <label><h6>Address</h6></label>
                    <input type = "text" name="address" onChange = {this.onChange} value={address}></input>
                   
                    
                    <div class="center-align">
                    <button  class="btn btn-large blue" type="submit" value="submit"> <span className="glyphicon glyphicon-edit"></span>Update  </button>
                                    
                    </div>
                </form>
               
          
               
            </div>
            </div>
        );


    }




}

export default connect(null,{addPatients,getPatients})(UpdatePatient);