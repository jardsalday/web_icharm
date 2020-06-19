import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecMedic} from '../actions/patientActions';
import {logout} from '../actions/auth';
import {Link,NavLink} from 'react-router-dom';
import patient from '../reducers/patient';
import '../App.css'
import { PatientComponent } from './PatientComponent';
import { CreatePatient } from './CreatePatient';
import Assess from './Assess';
import Pagination from './Pagination';
import Graph from './Graph';
import RiskGraph from './RiskGraph';
import Description from './Description';
import { CSSTransitionGroup } from 'react-transition-group';
import {Line} from 'react-chartjs-2';
import {loadUser} from '../actions/auth';
import {updateMedics} from '../actions/patientActions';

export class DoctorProfile extends Component{
 constructor(props){
   super(props);
    this.state = {
        patientOne:[],
        systolic:[],
        all:{},
        risk:{},
        sys:{},
        dia:{},
        weight:{},
        cholesterol:{},
        truesys:{},
        cholesterol2:{},
        displayrisk:"",
        desc:{},
        refresh:false,
        edit:false,
        name:'',
        username:'',
        email:'',
        phone_number:'',
        address:'',
        changePW:false,
        errPassword:false,
        password:'',
        passwordsec:''
       

        
        
        

    }
  }
    static propTypes={
      loadUser:PropTypes.func.isRequired,
      user: PropTypes.array.isRequired,
      updateMedics:PropTypes.func.isRequired,
      medicOnes:PropTypes.array.isRequired,
      isAdmin:PropTypes.bool.isRequired,
      logout:PropTypes.func.isRequired
  }

  editData(){
      const email2 = [this.props.medicOnes.map(data=>data.email)];
      const address2 = [this.props.medicOnes.map(data=>data.address)];
      const phone_number2 = [this.props.medicOnes.map(data=>data.phone_number)];
      this.setState({edit:!this.state.edit,
                     name:this.state.patientOne.map(data=>data.name),
                     username:this.props.user.username,
                     address:address2[0][0],
                     phone_number:phone_number2[0][0],
                     email:email2[0][0]
                     
                     })
  }
  savePassword=e=>{
    e.preventDefault();
    const id = this.props.medicOnes.map(data=>data.id);
    const user_id = this.props.medicOnes.map(data=>data.user_id)
    const {address,phone_number,email} = this.state;
    
    const patrec = {address,phone_number,email};
    this.props.updateMedics(patrec,id);
    this.setState({edit:!this.state.edit})
    
    const {password,passwordsec} = this.state;
    if(password !=passwordsec){
        this.setState({errPassword:true})
    }
    else{
        this.setState({errPassword:false})

    }
    if(password.length==0 || passwordsec.length==0){
        console.log("AAA")
        this.setState({edit:!this.state.edit})
    }
    else{
        this.setState({noPass:false})
    }
    if(password.length>0 && passwordsec.length>0 && password == passwordsec){
      const old_password = password;
      const new_password = passwordsec;
      const patrec={old_password,new_password};
      axios.put(`http://192.168.1.8:8000/api/changepw?id=${user_id}`,patrec).then(res=>{console.log(res.data);alert("Password Changed");});
      
      this.setState({password:'',passwordsec:'',changePW:false,edit:!this.state.edit});
  }
    
}
  saveData= e=>{
    e.preventDefault();
    const id = this.props.medicOnes.map(data=>data.id);
    const {address,phone_number,email} = this.state;
    if(address != null){
    const patrec = {address,phone_number,email};
    this.props.updateMedics(patrec,id);
    this.setState({edit:!this.state.edit})
    }
  }
  showPW(){
    this.setState({changePW:true});
  }
  componentDidMount(){
    this.props.loadUser();
    console.log(this.props.user);
    this.props.getSpecMedic(this.props.user.id);
    
    //axios.get(`http://192.168.1.8:8000/api/getspecific/?id=${this.props.user.id}`).then(res=>this.setState({patientOne:res.data}));

  }
  onChange=e=> this.setState({[e.target.name]:e.target.value})
    render(){
      const {name,username,address,phone_number,password,passwordsec,email} = this.state
      const email2 = [this.state.patientOne.map(data=>data.email)]  
      console.log(this.props.medicOnes);
        return (
            <div className="background grey lighten-3">
            
            

            {this.props.isAdmin?
                
                <div class="navbar-fixed">
                            <nav class="nav-wrapper white darken-1" style={{}}>
                            <div class="container">
                                <a href="#" class="brand-logo blue-text text-darken-4 -text">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/adminhome" className="blue-text text-darken-4" ><span className=" blue-text text-darken-4 glyphicon glyphicon-home"></span>Home</NavLink></li>
             			<li> <Link to ="/adminpatients" className="blue-text text-darken-4" ><span className=" blue-text text-darken-4 glyphicon glyphicon-th-list"></span>Patients Records</Link></li>
                   <li> <Link to ="/adminmedics" className="blue-text text-darken-4"  ><span className="blue-text text-darken-4 glyphicon glyphicon-globe"></span>Medics Records</Link></li>
                   <li><NavLink to ="/medicprofile" className="btn blue darken-4 white-text text-darken-1" ><span className="glyphicon glyphicon-user"></span> Profile</NavLink></li>
<li><a onClick = {this.props.logout.bind(this)}href="/login" class="blue-text text-darken-4"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                        :

                <div class="navbar-fixed">
                            <nav class="nav-wrapper white darken-1" >
                            <div class="container">
                                <a href="#" class="brand-logo blue-text text-darken-4">iCHARM Portal</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                
                                
            			        <li> <Link to ={this.props.isAuthenticated?"/adminpatients":"/patient"} className="blue-text text-darken-4 text-lighten-2"><span className="glyphicon glyphicon-th-list"></span> Patient Records</Link></li>
                                <li><NavLink to ="/medicprofile" className="btn blue darken-4 white-text"><span className="glyphicon glyphicon-user white-text "></span> Profile</NavLink></li>
                                <li><a onClick={this.props.logout.bind(this)} href="/login" class="blue-text text-darken-4"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                        
                        
                        }
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient"></Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>

                                 <li><a href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                         </ul> <div className ="col"><br/></div>
                         <div className="row">
                        <div className="col-lg-3 col-sm-4 col-md-4"></div>
                         <div className={this.state.edit?"col-lg-5  userprofile2 card-panel white ":"col-lg-5 col-sm-5 userprofile2 card-panel white"}
                          style={{borderRadius:"5px",border:"1px solid #0d47a1",borderTop:"8px solid #0d47a1",borderBottom:"8px solid #0d47a1"}}
                         >
                        
                         <button className={this.state.edit?"editprofile btn green lighten-2 white-text right":"editprofile btn blue darken-4 white-text right"} onClick={this.state.edit?this.savePassword.bind(this):this.editData.bind(this)
                             
                            }>{this.state.edit?<i className=" nav-gear	glyphicon glyphicon-ok white-text"></i>:<i className=" nav-gear	glyphicon glyphicon-pencil white-text"></i>}</button>
                         <div>{'   '  }
                       
                          <div className="row center-align" style={{backgroundColor:"lightgrey",width:"100px",height:"100px"}}><span style={{padding:"15px",fontSize:"70px"}} className="white-text glyphicon glyphicon-user"></span></div>
                           <div className="row center-align">
        <h4 className=" blue-text text-darken-4 " style={{textDecoration:"underline"}}>{this.props.medicOnes.map(data=>data.name)}</h4>
                          <h6 className="black-text">{this.props.medicOnes.map(data=>data.position)}</h6>
                           </div>
                           <div className="">
                           </div> 
                           <div className={this.state.edit?null:"card-pro"} style={{borderRadius:"6px"}}>
                           <ul className={this.state.edit?"puserprofile grey-text text-darken-4":" userprofile white-text text-darken-1"} style={this.state.edit?null:{borderRadius:"5px",paddingLeft:"20px",paddingTop:"20px"}}>
                             
        <li><h5><i className="glyphicon glyphicon-user white-text"></i> Username:{'    '}<ba className={this.state.edit?"blue-text text-darken-4 text-lighten-1":"white-text text-darken-1"}>{this.props.user.username}</ba></h5></li> 
                           <li><h5><i className="	glyphicon glyphicon-envelope white-text"></i> Email:
                           <ba className="email-profile white-text text-darken-1">{'                                                  '}
                           {this.state.edit?<input type="text" className="input_edit_profile" style={{marginLeft:"95px",color:"#0d47a1 ",width:"450px"}} name="email" onChange={this.onChange} value={email}></input>:this.props.medicOnes.map(data=>data.email)}</ba>
                           </h5></li>
                           <li><h5><i className="glyphicon glyphicon-earphone white-text"></i> Phone Number:<ba className="white-text text-darken-1">{'   '}{this.state.edit?<input type="text" name="phone_number" 
                            style={{marginLeft:"95px",color:"#0d47a1 ",width:"455px"}} className="input_edit_profile" onChange={this.onChange} value={phone_number}></input>:this.props.medicOnes.map(data=>data.phone_number)}</ba></h5></li>
                          <li><h5><i className="glyphicon glyphicon-globe white-text"></i> Address:
                          <ba className="email-profile white-text text-darken-1">{'   '}{this.state.edit?<input type="text" style={{marginLeft:"95px",color:"#0d47a1 ",width:"450px"}} name="address" className="input_edit_profile" onChange={this.onChange} value={address}></input>:this.props.medicOnes.map(data=>data.address)}</ba></h5></li>
                          {/* <li><button className="btn orange white-text" onClick={this.showPW.bind(this)}>Change Password</button></li> */}
                            <li>{this.state.edit?<h5>Optional:</h5>:null}</li>
                          <div className="row">
                            <div className="col s6">
                          <li><h5>{this.state.edit?<h5>Type New Password</h5>:null}
                          <u className="email-profile grey-tex">{'   '}{this.state.edit?<input type="password" style={{color:"#0d47a1 "}}  name="password" onChange={this.onChange} value={password}></input>:null}</u></h5></li><br/><br/>
                           </div>
                           <div className="col s6">
                          <li><h5>{this.state.edit?<h5>Retype Password</h5>:null}
                          <u className="email-profile grey-tex">{'   '}{this.state.edit?<input type="password" style={{color:"#0d47a1 "}}  name="passwordsec" onChange={this.onChange} value={passwordsec}></input>:null}</u></h5></li><br/><br/>
                          {this.state.errPassword?<h6 className="errsize red-text">Password do not matched</h6>:this.state.noPass?<h6 className="errsize red-text">Password fields must not be empty</h6>:null}
                           </div>
                           </div>
                           </ul>
                           </div>
                          </div>
                         
                           </div>
                           <div className="col-lg-5"></div>
                    
                         </div>

{/* ---------------------FOOTER */}

<div class = "foot white">
                                <footer id = "footerdiv">
                        <div class="footer-copyright white">
            <div class="container blue-text text-darken-4 center">
            <b class = "copy">© iCHARM 2020</b>
            </div>
                </div></footer></div>

                
      </div>
        );


    }




}
const mapStateToProps = state =>({
  user :state.userreducer.user,
  medicOnes:state.medicOnereducer.medicOne,
  isAdmin:state.auth.isAdmin

});

export default connect(mapStateToProps,{loadUser,updateMedics,getSpecMedic,logout})(DoctorProfile);
/**
  */