import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecPatient} from '../actions/patientActions';
import {Link,NavLink} from 'react-router-dom';
import patient from '../reducers/patient';
import '../App.css'

import {loadUser} from '../actions/auth';
import {updatePatients} from '../actions/patientActions';
import {logout} from '../actions/auth';

export class UserProfile extends Component{
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
        password:'',
        passwordsec:'',
        errPassword:false
       

        
        
        

    }
  }
    static propTypes={
      loadUser:PropTypes.func.isRequired,
      user: PropTypes.array.isRequired,
      updatePatients:PropTypes.func.isRequired,
      patientOnes:PropTypes.array.isRequired,
      logout:PropTypes.func.isRequired
    
    }

  editData(){
      const email2 = [this.props.patientOnes.map(data=>data.email)];
      const address2 = [this.props.patientOnes.map(data=>data.address)];
      const phone_number2 = [this.props.patientOnes.map(data=>data.phone_number)];
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
    const user_id = this.props.patientOnes.map(data=>data.user_id);
    const id = this.props.patientOnes.map(data=>data.id);
    const {address,phone_number,email} = this.state;
    
    const patrec = {address,phone_number,email};
    this.props.updatePatients(patrec,id);
    
    
    const {password,passwordsec} = this.state;
    if(password !=passwordsec){
        this.setState({errPassword:true})
    }
    else{
        this.setState({errPassword:false})

    }
    if(password.length==0 || passwordsec.length==0){
        console.log("AAA")
        this.setState({edit:!this.state.edit,errPassword:false})
    }
    else{
        this.setState({noPass:false})
    }
    if(password.length>0 && passwordsec.length>0 && password == passwordsec){
        const old_password = password;
        const new_password = passwordsec;
        const patrec={old_password,new_password};
        axios.put(`http://icharmapi.herokuapp.com/api/changepw?id=${user_id}`,patrec).then(res=>{console.log(res.data);alert("Password Changed");});
        
        this.setState({password:'',passwordsec:'',changePW:false,edit:!this.state.edit});
    }
    // this.setState({edit:!this.state.edit})
    
    
}
  saveData= e=>{
    e.preventDefault();
    const id = this.props.patientOnes.map(data=>data.id);
    const {address,phone_number,email} = this.state;
    if(address != null){
    const patrec = {address,phone_number,email};
    this.props.updatePatients(patrec,id);
    // if(!this.state.errPassword){
    // this.setState({edit:!this.state.edit})
    // }
  }
  }
  componentDidMount(){
    this.props.loadUser();
    console.log(this.props.user);
    this.props.getSpecPatient(this.props.user.id);
    //axios.get(`http://192.168.1.3:8000/api/getspecific/?id=${this.props.user.id}`).then(res=>this.setState({patientOne:res.data}));

  }
  onChange=e=> this.setState({[e.target.name]:e.target.value})
    render(){
      const {name,username,address,phone_number,email,password,passwordsec} = this.state
      const email2 = [this.state.patientOne.map(data=>data.email)]  
      console.log(email2)
     console.log(this.state.patientOne)
        return (
            <div className="background  grey lighten-4">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper white">
                             <div class="container">
                                 <a href="#" class="brand-logo blue-text text-darken-4">iCHARM</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">

                                 <li><NavLink to ="/userpatient" className="blue-text text-darken-4" ><span className="glyphicon glyphicon-home blue-text text-darken-4"></span> Home</NavLink></li>
             			<li> <Link to ="/listusermeasure" className="blue-text text-darken-4" ><span className="glyphicon glyphicon-th-list blue-text text-darken-4"></span> Measures</Link></li>

                   <li><NavLink to ="/userprofile" className="btn blue darken-4 white-text" ><span className="glyphicon glyphicon-user white-text"></span> Profile</NavLink></li>

                                 <li><a onClick={this.props.logout.bind(this)} href="/login" class="blue-text text-darken-4"><span className="glyphicon glyphicon-log-out blue-text text-darken-4"></span> Logout</a></li>
                                 </ul>
                             </div>
                             </nav>
                         </div>
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient"></Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>

                                 <li><a onClick={this.props.logout.bind(this)} href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                         </ul> <div className ="col"></div>
                         <div className="row">
                         
                         <div className="col-lg-3 col-sm-4 col-md-4"></div>
                         <div className={this.state.edit?"col-lg-5  userprofile2 card-panel white ":"col-lg-5 col-sm-5 userprofile2 card-panel white"}
                         style={{borderRadius:"5px",border:"1px solid #0d47a1",borderTop:"8px solid #0d47a1",borderBottom:"8px solid #0d47a1"}}>
                        
                           <button className={this.state.edit?"editprofile btn green lighten-2 black-text right":"editprofile btn blue darken-4 black-text right"} onClick={this.state.edit?this.savePassword.bind(this):this.editData.bind(this)
                             
                             }>{this.state.edit?<i className=" nav-gear	glyphicon glyphicon-ok white-text"></i>:<i className=" nav-gear	glyphicon glyphicon-pencil white-text"></i>}</button>
                         <div>{'   '  }
                          <div className="row center-align" style={{backgroundColor:"lightgrey",width:"100px",height:"100px"}}><span style={{padding:"15px",fontSize:"70px"}} className="white-text glyphicon glyphicon-user"></span></div>
                           <div className="row center-align">
        <h4 className="blue-text text-darken-4 text-darken-1">{this.props.patientOnes.map(data=>data.name)}</h4>
        <h6 className="black-text">Patient</h6>

                           </div>
                           <div className="">
                           </div>
                          
                           </div>  <div className={this.state.edit?"card-edit-pro":"card-pro"}  style={{borderRadius:"6px"}}><ul className={this.state.edit?"puserprofile black-text text-darken-1":" userprofile white-text text-darken-1"} style={this.state.edit?null:{paddingLeft:"20px",paddingTop:"20px"}}>
                             
        <li><h5><i className="glyphicon glyphicon-user white-text thin"></i> Username:<label className={this.state.edit?"black-text text-darken-4 thin":"white-text thin"}>{this.props.user.username}</label></h5></li> 
                           <li><h5><i className="	glyphicon glyphicon-envelope white-text"></i> Email:<uu     className="email-profile white-text">{'                                                  '}
                           {this.state.edit?<input type="text" name="email" style={{color:"black"}} onChange={this.onChange} value={email}></input>:this.props.patientOnes.map(data=>data.email)}</uu>
                           </h5></li>
                           <li><h5><i className="glyphicon glyphicon-earphone white-text"></i> Phone Number:<uu     className="white-text">{'   '}{this.state.edit?<input type="text" style={{color:"black"}} name="phone_number" onChange={this.onChange} value={phone_number}></input>:this.props.patientOnes.map(data=>data.phone_number)}</uu></h5></li>
                                            <li><h5><i className="glyphicon glyphicon-globe white-text thin"></i> Address:<uu     className="email-profile white-text">{'   '}{this.state.edit?<input style={{color:"black"}} type="text" name="address" onChange={this.onChange} value={address}></input>:this.props.patientOnes.map(data=>data.address)}</uu></h5></li>
                                            <li>{this.state.edit?<h5>Optional:</h5>:null}{this.state.errPassword?<h6 className="errsize red-text">Passwords does not match</h6>:this.state.noPass?<h6 className="errsize red-text">Password fields must not be empty</h6>:null}</li>                
                            <div className="row">
                           
                            <div className="col s6">
                          <li><h5>{this.state.edit?<h5>New Password</h5>:null}
                          <uu     className="email-profile black-text">{'   '}{this.state.edit?<input type="password" name="password" onChange={this.onChange} value={password}></input>:null}</uu></h5></li><br/><br/>
                           </div>
                           <div className="col s6">
                          <li><h5>{this.state.edit?<h5>Retype Password</h5>:null}
                          <uu     className="email-profile black-text">{'   '}{this.state.edit?<input type="password" name="passwordsec" onChange={this.onChange} value={passwordsec}></input>:null}</uu></h5></li><br/>
                          
                           </div>
                           </div>
                           </ul>
                           
                          </div>
                         
                           </div>
                    


                         </div>


                {/* ---------------------FOOTER */}

                <div class = "foot white darken-4">
                  <footer id = "footerdiv">
                    <div class="footer-copyright white darken-4">
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
  patientOnes:state.patientOnereducer.patientOne

});

export default connect(mapStateToProps,{loadUser,updatePatients,getSpecPatient,logout})(UserProfile);
/**
  */