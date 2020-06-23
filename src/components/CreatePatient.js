    import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';

export class CreatePatient extends Component{
  state = {
        name:'',
        birthdate:'',
        sex:"Male",
        address:'',
        height:'',
        is_dia:'1',
        password:'',
        smoker:"0",
        username:'',
        password2:'',
        email:'',
        phone_number:'',
        month:'',
        day:'',
        year:'',
        errName:false,
        errBirthdate:false,
        errSex:false,
        errAddress:false,
        errHeight:false,
        errDia:false,
        errUser:false,
        errPass:false,
        errPhone:false,
        errMail:false,
        value:"MONTH",
        showMonth:false,
        showDay1:false,
        monthDisplay:'Month',
        month:'',
        day1:'0',
        clickDia:true,
        clickSex:true,
        clickSmoke:true

        

  }
    static propTypes = {
       
        addPatients:PropTypes.func.isRequired,
        getPatients:PropTypes.func.isRequired,
        error:PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const {error}=this.props;
        if(error!==prevProps.error){
            if(error.msg.patientprofile.name){
            this.setState({errName:true});
            }
        else{
            this.setState({errName:false});
        }
        if(error.msg.patientprofile.birthdate){
            this.setState({errBirthdate:true});
        }
        else{
            this.setState({errBirthdate:false});
        }
        if(error.msg.patientprofile.sex){
            this.setState({errSex:true});
        }
        else{
            this.setState({errSex:false});
        }
        if(error.msg.patientprofile.address){
            this.setState({errAddress:true});
        }
        else{
            this.setState({errAddress:false});
        }
        if(error.msg.patientprofile.height){
            this.setState({errHeight:true});
        }
        else{
            this.setState({errHeight:false});
        } 
        if(error.msg.patientprofile.is_dia){
            this.setState({errDia:true});
        }
        else{
            this.setState({errDia:false});
        }       
        if(error.msg.username){
            this.setState({errUser:true});
        }
        else{
            this.setState({errUser:false});
        } 
        if(error.msg.password){
            this.setState({errPass:true});
        }
        else{
            this.setState({errPass:false});
        }   
        if(error.msg.patientprofile.email){
            this.setState({errMail:true});
        }
        else{
            this.setState({errMail:false});
        }   
        if(error.msg.patientprofile.phone_number){
            this.setState({errPhone:true});
        }
        else{
            this.setState({errPhone:false});
        }                           
        }
          
    }
   
    onChange=e=> this.setState({[e.target.name]:e.target.value})
getAge(bday){
    var today = new Date();
    var birthdate = new Date(bday);
    var age = today.getFullYear()-birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if(m<0||(m==0 && today.getDate()<birthdate.getDate())){
        age = age-1
    }
    return age
}
    onSubmit=e=>{
        e.preventDefault();
        const {name,sex,address,height,is_dia,password,username,phone_number,email,month,day,year,smoker} = this.state;
        var bday = month;
        var today = new Date();
        var birthdate = new Date(bday);
        var final_birthdate = +(birthdate.getMonth()+1)+"/"+birthdate.getDate()+"/"+birthdate.getFullYear()
        console.log(final_birthdate)
        var age2 = today.getFullYear()-birthdate.getFullYear();
        var m = today.getMonth() - birthdate.getMonth();
        if(m<0||(m==0 && today.getDate()<birthdate.getDate())){
            age2 = age2-1
        }
        birthdate = final_birthdate     
        const age = age2        
        const patrec={username,password,patientprofile:{name,birthdate,sex, address,height,is_dia,phone_number,email,age,smoker}};
        console.log(patrec)
            this.props.addPatients(patrec);
        this.setState({name:'',birthdate:'',address:'',height:'',password:'',username:'',phone_number:'',
    email:'',clickDia:true,clickSex:true,clickSmoke:true});
        


    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
      monthClick(event) {
          if (event.target.id == "1"){
            this.setState({monthDisplay:"Jan"})
          }
          if (event.target.id == "2"){
            this.setState({monthDisplay:"Feb"})
        }
        if (event.target.id == "3"){
            this.setState({monthDisplay:"Mar"})     
        }
        if (event.target.id =="4" ){
            this.setState({monthDisplay:"Apr"})
        }
        if (event.target.id == "5"){
            this.setState({monthDisplay:"May"})
        }
        if (event.target.id == "6"){
            this.setState({monthDisplay:"Jun"})
        }
        if (event.target.id == "7"){
            this.setState({monthDisplay:"Jul"})
        }
        if (event.target.id == "8"){
            this.setState({monthDisplay:"Aug"})
        }
        if (event.target.id == "9"){
            this.setState({monthDisplay:"Sep"})
        }
        if (event.target.id == "10"){
            this.setState({monthDisplay:"Oct"})
        }
        if (event.target.id == "11"){
            this.setState({monthDisplay:"Nov"})
        }
        if (event.target.id == "12"){
            this.setState({monthDisplay:"Dec"})
        }
        this.setState({
          month: event.target.id,
          showMonth:false
        });
    
    
    }
    day1Click(event){
        this.setState({day1:event.target.id})
    }
    setDiaNo(){
        this.setState({is_dia:'1',clickDia:true})
        console.log(this.state.is_dia)
    }
    setDiaYes(){
        this.setState({is_dia:'3',clickDia:false})
        console.log(this.state.is_dia)
    }
    setMale(){
        this.setState({sex:"Male",clickSex:true})
      
    }
    setFemale(){
        this.setState({sex:"Female",clickSex:false})
        
    }
    setSmYes(){
        this.setState({smoker:"1",clickSmoke:false})
        console.log(this.state.smoker)
    }
    setSmNo(){
        this.setState({smoker:"0",clickSmoke:true})
        console.log(this.state.smoker)
    }
    render(){
        const today = new Date();
        console.log(this.state.sex)
        console.log(this.state.is_dia)
        console.log(this.state.smoker)
        const{name,birthdate,sex,address,height,is_dia,password,email,phone_number,month,day,year,username} = this.state
        return (<div>
    <h6 className="header-form-text blue-text text-darken-4" style={{fontSize:"28px"}}><span className="glyphicon glyphicon-download-alt"></span>{'   '}Add Patient</h6>
            <div className="Form " >
                
               
                <form onSubmit={this.onSubmit}>
                    
                            <div className = "row">
                <div className="col s9">
                <label><h6 style={{color:"black"}}>Name</h6></label>
                <input type = "text" name="name" onChange = {this.onChange} value={name}></input>
        {this.state.errName?<h6 className="errsize red-text">Must not be blank or Name already exists</h6>:null}
                    </div>
                    <div className="col s3">
                        
                    <label><h6 style={{color:"black"}}>Birthday</h6></label>
                    <br/>
                    <input type="text" name = "month" value={month} onChange={this.onChange}></input>
                    
                    {this.state.errBirthdate?<h6 className="errsize red-text">Must not be blank</h6>:null}
                    </div>
                
                
                   
                    <div className="col s2">
                    <label><h6 style={{color:"black"}}>Height</h6></label>
                    <input type = "text" name="height" onChange = {this.onChange} value={height}></input>
                    {this.state.errHeight?<h6 className="errsize red-text">Must not be blank</h6>:null}
                    </div>
                    <div className="col s4">
                    <label><h6 style={{color:"black"}}>Gender</h6></label>
                    <br></br>
                    <div onClick={this.setMale.bind(this)} className={this.state.clickSex?"btn blue darken-4   white-text":"btn black-text white"}>Male</div>
                    <div onClick={this.setFemale.bind(this)} className={this.state.clickSex?"btn white black-text":"btn blue darken-4 "}>Female</div>
                    
                    {this.state.errSex?<h6 className="errsize red-text">Must not be blank</h6>:null}
                    </div>
                    <div className="col s3"><label><h6 style={{color:"black"}}>Diabetic</h6></label>
                    <br></br>
                    <div onClick = {this.setDiaNo.bind(this)} className={this.state.clickDia?"btn blue darken-4 ":"btn white black-text"}>No</div>
                   
                    <div onClick = {this.setDiaYes.bind(this)} className={this.state.clickDia?"btn white black-text":"btn blue darken-4  "}>Yes</div>
                     {this.state.errDia?<h6 className="errsize red-text"  style={{color:"black"}}>Must not be blank</h6>:null}
                    </div>
                    <div className="col s3"><label><h6 style={{color:"black"}}>Smoker</h6></label>
                    <br></br>
                    <div onClick = {this.setSmNo.bind(this)}  className={this.state.clickSmoke?"btn blue darken-4 ":"btn white black-text"}>No</div>
                    <div onClick = {this.setSmYes.bind(this)}  className={this.state.clickSmoke?"btn black-text white":"btn blue darken-4  white-text"}>Yes</div>
                 
                    {this.state.errDia?<h6  style={{color:"black"}} className="errsize red-text">Must not be blank</h6>:null}
                    </div>
                    </div>
                    <div className="row">
                    <div className="col s6">
                    <label><h6 style={{color:"black"}} >Address</h6></label>
                    <input type = "text" name="address" onChange = {this.onChange} value={address}></input>
                    {this.state.errAddress?<h6 className="errsize red-text">Must not be blank</h6>:null}
                   </div>
                   <div style={{color:"black"}}  className="col s6">
                    <label><h6 className="black-text text-darken-4">Email</h6></label>
                       <input type ="text" name="email" onChange={this.onChange} value={email}></input>
                       {this.state.errMail?<h6 className="errsize red-text">Must not be blank</h6>:null}
                       
                   </div>
                   </div>
                    <div className="row">
                   
                    <div className="col s4"><label><h6 style={{color:"black"}} >Phone Number</h6></label>
                    <input type = "text" name = "phone_number" onChange = {this.onChange} value ={phone_number}></input>
                    {this.state.errPhone?<h6 className="errsize red-text">Must not be blank</h6>:null}
                    </div>
                    <div className="col s4">
                    <label><h6 className="black-text text-darken-4">Username</h6></label>
                    <input type = "text" name = "username" onChange={this.onChange} value={username}></input>
                    {this.state.errUser?<h6 className="errsize red-text">Must not be blank or User Already Exist</h6>:null}
                    </div>
                    <div className="col s4">
                    <label><h6 className="black-text text-darken-4">Password</h6></label>    
                    <input type = "password" name = "password" onChange = {this.onChange} value = {password}></input>
                    {this.state.errPass?<h6 className="errsize red-text">Must not be blank</h6>:null}            
                    </div>
                    
                    </div>
                    <div class="center-align">
                    <button  class="btn btn-large blue darken-4  darken" type="submit" value="submit"> <span className="glyphicon glyphicon-saved"></span>Add  </button>
                                    
                    </div>
                </form>
               
          
               
            </div>
            </div>
        );


    }




}
const mapStateToProps=state=>({
    error:state.errors

});
export default connect(mapStateToProps,{addPatients,getPatients})(CreatePatient);
