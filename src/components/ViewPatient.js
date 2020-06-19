import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';
import {logout} from '../actions/auth';

export class ViewPatient extends Component{
  state = {
        name:'',
        age:'',
        sex:'',
        address:''
  }
  static propTypes={
      logout:PropTypes.func.isRequired
  }
   
    onChange=e=> this.setState({[e.target.name]:e.target.value})

    onSubmit=e=>{
        e.preventDefault();
        const {name, age,sex,address} = this.state;
        const patrec={name, age, sex, address};

    }
    render(){
        const{name,age,sex,address} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type = "text" placeholder="First Name" name="name" onChange = {this.onChange} value={name}></input><br></br>
                    <input type = "text" name="age" onChange = {this.onChange} value={age}></input><br></br>
                    <input type = "text" name="sex" onChange = {this.onChange} value={sex}></input><br></br>
                    <input type = "text" name="address" onChange = {this.onChange} value={address}></input><br></br>
                    <div class="center-align">
                    <button  class="btn btn-large green" type="submit" value="submit">Submit</button>
                    </div>
                </form>
               
          
               
            </div>
        );


    }




}

export default connect(null,{logout})(ViewPatient);