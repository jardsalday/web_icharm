import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecPatient,updatePatients} from '../actions/patientActions';
import {logout} from '../actions/auth';
import AdminCreatePatient from './AdminCreatePatient';
import {Link,NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AdminModal from './AdminModal';

export class PatientEditAdmin extends Component{
constructor(props){
    super(props);
        this.state={
        admin_patient_one:[],
        admin_patient_user:[],
        editName:false,
        editBirthdate:false,
        editSex:false,
        editHeight:false,
        editDiabetes:false,
        editAddress:false,
        name:'',
        birthdate:'',
        sex:'',
        address:'',
        height:'',
        is_dia:'',
        password:'',
        username:'',
        password2:'',
        email:'',
        phone_number:'',
        editMail:'',
        editPhone:'',
        edit:false

    }
}
    static propTypes = {
        patientOne: PropTypes.array.isRequired,
        updatePatients:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool,
        isDoctor:PropTypes.bool,
        isAdmin:PropTypes.bool,
        logout:PropTypes.func.isRequired
      
    }
    changeMail(){
        this.setState({editMail:true})
    }
    changePhone(){
        this.setState({editPhone:true})
    }
    changeName(){
       this.setState({editName:true})
    }
    changeBirthdate(){
        this.setState({editBirthdate:true})
     }
     changeAddress(){
        this.setState({editAddress:true})
     }
     changeHeight(){
        this.setState({editHeight:true})
     }
     changeSex(){
        this.setState({editSex:true})
     }
     changeDiabetes(){
        this.setState({editDiabetes:true})
     }
    saveName=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {name} = this.state;
        const patrec = {name};
        this.props.updatePatients(patrec,id);
        this.setState({editName:false})
        

    }
    saveBirthdate=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {birthdate} = this.state;
        const patrec = {birthdate};
        this.props.updatePatients(patrec,id);
        this.setState({editBirthdate:false})
        

    }
    saveSex=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {sex} = this.state;
        const patrec = {sex};
        this.props.updatePatients(patrec,id);
        this.setState({editSex:false})
        

    }
    saveAddress=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {address} = this.state;
        const patrec = {address};
        this.props.updatePatients(patrec,id);
        this.setState({editAddress:false})
        

    }
    saveHeight=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {height} = this.state;
        const patrec = {height};
        this.props.updatePatients(patrec,id);
        this.setState({editHeight:false})
        

    }
    saveDiabetes=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {is_dia} = this.state;
        const patrec = {is_dia};
        this.props.updatePatients(patrec,id);
        this.setState({editDiabetes:false})
        

    }
    saveMail=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {email} = this.state;
        const patrec = {email};
        this.props.updatePatients(patrec,id);
        this.setState({editMail:false});
        
    }

    editData(){
                       const pname = this.props.patientOne.map(data=>data.name);
                       const pbirthdate=this.props.patientOne.map(data=>data.birthdate);
                       const psex=this.props.patientOne.map(data=>data.sex);
                       const paddress=this.props.patientOne.map(data=>data.address);
                       const pemail=this.props.patientOne.map(data=>data.email);
                       const pphone_number=this.props.patientOne.map(data=>data.phone_number);
                       const pheight=this.props.patientOne.map(data=>data.height);
                       const pis_dia=this.props.patientOne.map(data=>data.is_dia);
        this.setState({edit:!this.state.edit,
                       name:pname[0],
                       birthdate:pbirthdate[0],
                       sex:psex[0],
                       address:paddress[0],
                       email:pemail[0],
                       phone_number:pphone_number[0],
                       height:pheight[0],
                       is_dia:pis_dia[0]

                    //    username:this.props.user.username,
                    //    address:address2[0][0],
                    //    phone_number:phone_number2[0][0],
                    //    email:email2[0][0]
                       
                       })
    }
    
    savePhone=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {phone_number} = this.state;
        const patrec = {phone_number};
        this.props.updatePatients(patrec,id);
        this.setState({editPhone:false});
        
    }
    onChange=e=> this.setState({[e.target.name]:e.target.value})
    componentDidMount(){
        const patientID = this.props.match.params.patientID; 
        this.props.getSpecPatient(patientID)
        // axios.get(`http://192.168.1.9:8000/api/getspecific/?id=${patientID}`).then(res=>{this.setState({admin_patient_one:res.data})});
        // axios.get(`http://192.168.1.8:8000/api/userspec/?id=${patientID}`).then(res=>{this.setState({admin_patient_user:res.data})});
    }
    saveData= e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const{name,birthdate,sex,address,height,is_dia,email,phone_number,username} = this.state
        const patrec = {name,birthdate,sex,address,height,is_dia,email,phone_number};
        this.props.updatePatients(patrec,id);
        this.setState({edit:!this.state.edit})
        
      }
    render(){
       let addModalClose = ()=> this.setState({addModalShow:false});
       const{name,birthdate,sex,address,height,is_dia,email,phone_number,username} = this.state
        const a = false;
        return (
            <div className="background grey lighten-4">
                {this.props.isAdmin?
                
                <div class="navbar-fixed">
                            <nav class="nav-wrapper cyan darken-1">
                            <div class="container">
                                <a href="#" class="brand-logo">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/adminhome"  ><span className="glyphicon glyphicon-home"></span>Home</NavLink></li>
             			<li> <Link to ="/adminpatients" className="btn white cyan-text text-darken-1" ><span className="glyphicon glyphicon-th-list"></span>Patients Records</Link></li>
                   <li> <Link to ="/adminmedics"  ><span className="glyphicon glyphicon-globe"></span>Medics Records</Link></li>
                   <li><NavLink to ="/adminprofile"  ><span className="glyphicon glyphicon-user"></span> Profile</NavLink></li>
<li><a onClick={this.props.logout.bind(this)} href="/login" class="white-text"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                        :

                <div class="navbar-fixed">
                            <nav class="nav-wrapper cyan darken-1">
                            <div class="container">
                                <a href="#" class="brand-logo">iCHARM </a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                
                                
            			        <li> <Link to ={this.props.isAuthenticated?"/adminpatients":"/patient"} className="btn white cyan-text"><span className="glyphicon glyphicon-th-list"></span> Patient Records</Link></li>
                                <li><NavLink to ="/medicprofile" className="white-text text-lighten-2"><span className="glyphicon glyphicon-user"></span> Profile</NavLink></li>
                                <li><a onClick={this.props.logout.bind(this)} href="/login" class="white-text"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                        
                        
                        }

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/adminpatients">Patient Records</Link></li>
            			<li> <Link to ="/adminmedics">Medical Workers</Link></li>
                                <li><a onClick={this.props.logout.bind(this)} href="/login" class="btn white red-text"> Logout</a></li>
                        </ul>
                <br></br>
                         
                <div className="col-lg-3 col-sm-4 col-md-4"></div>
               
                <div className="col-lg-5  white edit-data">
                <div className="cyan center" style={{marginTop:"-28px",marginLeft:"-13.5px",width:"622px",backgroundColor:"linear-gradient(to left, #80deea  0%,#00bcd4   100%);"}}>
                <span><h3 className="white-text">PATIENT DETAILS
                <button style={{height:"45px"}} className={this.state.edit?"editprofile btn white right":"editprofile btn white lighten-2 white-text right"} 
                onClick={this.state.edit?this.saveData.bind(this):this.editData.bind(this)}>
                    {this.state.edit?<i className=" nav-gear	glyphicon glyphicon-ok cyan-text"></i>
                    :<i className=" nav-gear	glyphicon glyphicon-pencil cyan-text"></i>}
                    </button>
                </h3></span>
                
                </div>
                {this.state.edit?<h6 style={{position:"fixed"}}>(YOU CAN NOW EDIT)</h6>:null}
                <div className="row">
                 
                <div className="col-lg-12 col-md-6">
                
                <br/><br/>
                <div className = "col s6"><h5>Name:</h5>
                {/* <input type = "text" name="name" onChange = {this.onChange} 
                value={this.state.editName?name:this.props.patientOne.map(data=>data.name)} */}
                 {this.state.edit?<input type="text" name="name" onChange={this.onChange} value={name}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="birthdate" value={this.props.patientOne.map(data=> data.name)}>
                     </input>}
                    </div>
                <div className = "col s6"><h5>Birthdate:</h5>
                {/* <input type = "text" name="birthdate" onChange = {this.onChange} 
                value={this.state.editBirthdate?birthdate:this.props.patientOne.map(data=>data.birthdate)}> */}
                {this.state.edit?<input type="text" name="birthdate" onChange={this.onChange} value={birthdate}></input>
                 :<input  style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="birthdate" value={this.props.patientOne.map(data=> data.birthdate)}></input>}   
                    </div>
                <div className = "col s6"><h5>Sex:</h5>
                {this.state.edit?<input type="text" name="sex" onChange={this.onChange} value={sex}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="sex" value={this.props.patientOne.map(data=> data.sex)}></input>}   
                  
                </div>
                <div className = "col s6"><h5>Height:</h5>
                {/* <input type = "text" name="height" onChange = {this.onChange} 
                value={this.state.editHeight?height:this.props.patientOne.map(data=>data.height)}></input> */}
                 {this.state.edit?<input type="text" name="height" onChange={this.onChange} value={height}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="height" value={this.props.patientOne.map(data=> data.height)}></input>}   

                </div>
                <div className = "col s6"><h5>Diabetes:</h5>
                {/* <input type = "text" name="is_dia" onChange = {this.onChange}
                 value={this.state.editDiabetes?is_dia:this.props.patientOne.map(data=>data.is_dia)}></input> */}
                {this.state.edit?<input type="text" name="is_dia" onChange={this.onChange} value={is_dia}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="is_dia" value={this.props.patientOne.map(data=> data.is_dia)}></input>}    
                 </div>
                <div className = "col s6"><h5>Address:</h5>
                {/* <input type = "text" name="address" onChange = {this.onChange}
                 value={this.state.editAddress?address:this.props.patientOne.map(data=>data.address)}>
                     </input> */}
                      {this.state.edit?<input type="text" name="address" onChange={this.onChange} value={address}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="address" value={this.props.patientOne.map(data=> data.address)}></input>}    
                     </div>
                <div className = "col s6"><h5>Email:</h5>
                {/* <input type = "text" name="email" onChange = {this.onChange}  */}
                
                {/* value={this.state.editMail?email:this.props.patientOne.map(data=>data.email)}></input></div> */}
                {this.state.edit?<input type="text" name="email" onChange={this.onChange} value={email}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="email" value={this.props.patientOne.map(data=> data.email)}></input>}    
                </div>
                <div className = "col s6"><h5 style={{}}>Phone Number:</h5>
                {/* <input type = "text" name="phone_number" onChange = {this.onChange} 
                value={this.state.editPhone?phone_number:this.props.patientOne.map(data=>data.phone_number)}>
                    </input> */}
                     {this.state.edit?<input type="text" name="phone_number" onChange={this.onChange} value={phone_number}></input>
                 :<input style={{color:"#4267B2",fontWeight:"bold"}} type ="text" name="phone_number" value={this.props.patientOne.map(data=> data.phone_number)}></input>}

                    </div>
                  
                </div></div>

                
          </div>

{/* ---------------------FOOTER */}

<div class = "foot cyan">
                                <footer id = "footerdiv">
                        <div class="footer-copyright cyan">
            <div class="container white-text center">
            <b class = "copy">© iCHARM 2020</b>
            </div>
                </div></footer></div>
         
               
            </div>
        );


    }




}
const mapStateToProps = state =>({
    patientOne :state.patientOnereducer.patientOne,
    isAuthenticated: state.auth.isAuthenticated,
    isDoctor:state.auth.isDoctor,
    isAdmin:state.auth.isAdmin
 

});

export default connect(mapStateToProps,{getSpecPatient,updatePatients,logout})(PatientEditAdmin);
