import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateMedics, getSpecMedic } from "../actions/patientActions";
import {logout} from '../actions/auth';
import CreatePatient from "./CreatePatient";
import { Link, NavLink } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import AdminModal from "./AdminModal";
import AdminCreateMedic from "./AdminCreateMedic";

export class AdminEditMedic extends Component {
  constructor(props){
    super(props);
        this.state={
        admin_patient_one:[],
        admin_patient_user:[],
        editName:false,
        editBirthdate:false,
        editSex:false,
        edithospital:false,
        editposition:false,
        editAddress:false,
        editNumber:false,
        name:'',
        birthdate:'',
        sex:'',
        address:'',
        hospital:'',
        is_dia:'',
        password:'',
        username:'',
        password2:'',
        phone_number:'',
        email:'',
        changePW:false,
        errPassword:false,
        editPhone:false,
        editMail:false,
        edit:false

    }
}
static propTypes = {
  medicOne: PropTypes.array.isRequired,
  updateMedics:PropTypes.func.isRequired,
  logout:PropTypes.func.isRequired

}
editData(){
  const pname = this.props.medicOne.map(data=>data.name);
  const pbirthdate=this.props.medicOne.map(data=>data.birthdate);
  const psex=this.props.medicOne.map(data=>data.sex);
  const paddress=this.props.medicOne.map(data=>data.address);
  const pemail=this.props.medicOne.map(data=>data.email);
  const pphone_number=this.props.medicOne.map(data=>data.phone_number);
  const phospital=this.props.medicOne.map(data=>data.hospital);
  const prole=this.props.medicOne.map(data=>data.position);
this.setState({edit:!this.state.edit,
  name:pname[0],
  birthdate:pbirthdate[0],
  sex:psex[0],
  address:paddress[0],
  email:pemail[0],
  phone_number:pphone_number[0],
  hospital:phospital[0],
  postision:prole[0]

//    username:this.props.user.username,
//    address:address2[0][0],
//    phone_number:phone_number2[0][0],
//    email:email2[0][0]
  
  })
}
changePass(){
        this.setState({changePW:true})
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
changehospital(){
   this.setState({edithospital:true})
}
changeSex(){
   this.setState({editSex:true})
}
changeposition(){
   this.setState({editposition:true})
}
changeNumber(){
  this.setState({editNumber:true})
}
savePassword=e=>{
        e.preventDefault();
        const id = this.props.match.params.patientID; 
        const {password,password2} = this.state;
        if(password !=password2){
            this.setState({errPassword:true})
        }
        else{
            this.setState({errPassword:false})

        }
        if(password.length==0||password2.length==0){
            this.setState({noPass:true})
        }
        else{
            this.setState({noPass:false})
        }
        if(password == password2){
            const old_password = password;
            const new_password = password2;
            const patrec={old_password,new_password};
            axios.put(`http://192.168.1.3:8000/api/changepw?id=${id}`,patrec).then(res=>console.log(res.data));
            alert("Password Changed");
            this.setState({password:'',passwordsec:'',changePW:false});
        }
        
    }
saveName=e=>{
   e.preventDefault();
   const id = this.props.medicOne.map(data=>data.id);
   const {name} = this.state;
   const patrec = {name};
   this.props.updateMedics(patrec,id);
   this.setState({editName:false})
   

}
saveMail=e=>{
        e.preventDefault();
        const id = this.props.medicOne.map(data=>data.id);
        const {email} = this.state;
        const patrec = {email};
        this.props.updatePatients(patrec,id);
        this.setState({editMail:false});
        
    }
    savePhone=e=>{
        e.preventDefault();
        const id = this.props.medicOne.map(data=>data.id);
        const {phone_number} = this.state;
        const patrec = {phone_number};
        this.props.updatePatients(patrec,id);
        this.setState({editPhone:false});
        
    }
saveBirthdate=e=>{
   e.preventDefault();
   const id = this.props.medicOne.map(data=>data.id);
   const {birthdate} = this.state;
   const patrec = {birthdate};
   this.props.updateMedics(patrec,id);
   this.setState({editBirthdate:false})
   

}
saveSex=e=>{
   e.preventDefault();
   const id = this.props.medicOne.map(data=>data.id);
   const {sex} = this.state;
   const patrec = {sex};
   this.props.updateMedics(patrec,id);
   this.setState({editSex:false})
   

}
saveAddress=e=>{
   e.preventDefault();
   const id = this.props.medicOne.map(data=>data.id);
   const {address} = this.state;
   const patrec = {address};
   this.props.updateMedics(patrec,id);
   this.setState({editAddress:false})
   

}
savehospital=e=>{
   e.preventDefault();
   const id = this.props.medicOne.map(data=>data.id);
   const {hospital} = this.state;
   const patrec = {hospital};
   this.props.updateMedics(patrec,id);
   this.setState({edithospital:false})
   

}
saveposition=e=>{
   e.preventDefault();
   const id = this.props.medicOne.map(data=>data.id);
   const {is_dia} = this.state;
   const patrec = {is_dia};
   this.props.updateMedics(patrec,id);
   this.setState({editposition:false})
   

}
saveNumber=e=>{
  e.preventDefault();
  const id = this.props.medicOne.map(data=>data.id);
  const {phone_number} = this.state;
  const patrec = {phone_number};
  this.props.updateMedics(patrec,id);
  this.setState({editNumber:false})
}

onChange=e=> this.setState({[e.target.name]:e.target.value})

saveData= e=>{
  e.preventDefault();
  const id = this.props.medicOne.map(data=>data.id);
  const{name,birthdate,sex,address,hospital,position,email,phone_number} = this.state
  const patrec = {name,birthdate,sex,address,hospital,position,email,phone_number};
  this.props.updateMedics(patrec,id);
  this.setState({edit:!this.state.edit})
  
}

componentDidMount(){
  const patientID = this.props.match.params.patientID; 
  this.props.getSpecMedic(patientID)
  // axios.get(`http://172.20.10.11:8000/api/getspecific/?id=${patientID}`).then(res=>{this.setState({admin_patient_one:res.data})});
  // axios.get(`http://192.168.1.8:8000/api/userspec/?id=${patientID}`).then(res=>{this.setState({admin_patient_user:res.data})});
}
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    const{name,birthdate,sex,address,hospital,position,phone_number,email,password,password2,username} = this.state
    return (
      <div className="background white">
        
        
        <div class="navbar-fixed">
                            <nav class="nav-wrapper white darken-1">
                            <div class="container">
                                <a href="#" class="brand-logo blue-text text-darken-4   ">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/adminhome"  ><span className="glyphicon glyphicon-home"></span>Home</NavLink></li>
             			<li> <Link to ="/adminpatients" className="blue-text text-darken-4   " ><span className="blue-text text-darken-4    glyphicon glyphicon-th-list"></span>Patients Records</Link></li>
                   <li> <Link to ="/adminmedics" className="btn blue darken-4   white-text text-darken-1" ><span className="blue-text text-darken-4    glyphicon glyphicon-globe"></span>Medics Records</Link></li>
                   <li><NavLink to ="/medicprofile" className="blue-text text-darken-4   " ><span className="blue-text text-darken-4    glyphicon glyphicon-user"></span> Profile</NavLink></li>
<li><a onClick={this.props.logout.bind(this)} href="/login" class="blue-text text-darken-4   "><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>




        <ul class="sidenav" id="mobile-links">
          <li>
            <Link to="/adminpatients">Patient Records</Link>
          </li>
          <li>
            <Link to="/adminmedics">Medical Workers</Link>
          </li>
          <li>
            <a onClick={this.props.logout.bind(this)} href="/login" class="btn white red-text">Logout
            </a>
          </li>
        </ul>
        <br></br>



        
        <div className="col-lg-3 col-sm-4 col-md-4"></div>
       
        <div style={{position:"relative"}} className="col-lg-5 edit-data white">
        <div className="blue darken-4   center" style={{marginTop:"-28px",marginLeft:"-13.5px",width:"105%",backgroundColor:"linear-gradient(to left, #80deea  0%,#00bcd4   100%);"}}>
                <span><h3 className="white-text">MEDIC DETAILS
                <span style={{height:"50px",marginRight:"10px",borderLeft:"1px solid white",paddingLeft:"10px"}} className={this.state.edit?"editprofile  white-text right":"editprofile  white-text lighten-2 white-text right"} 
                onClick={this.state.edit?this.saveData.bind(this):this.editData.bind(this)}>
                    {this.state.edit?<i className=" nav-gear	glyphicon glyphicon-ok white-text"></i>
                    :<i className=" nav-gear	glyphicon glyphicon-pencil white-text"></i>}
                    </span>
                </h3></span>
                
                </div>
                {this.state.edit?<h6 style={{position:"absolute"}}>(YOU CAN NOW EDIT)</h6>:null}
                <br/><br/>
        <div className="row  ">
                <div className="col-lg-12"></div>
                
                    
                <div className = "col s6"><h5 className="grey-text text-darken-2">Name:</h5>
                {this.state.edit?<input type="text" name="name" onChange={this.onChange} value={name}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="name" value={this.props.medicOne.map(data=> data.name)}>
                     </input>}   </div>
                <div className = "col s6"><h5>Birthdate:</h5>
                {this.state.edit?<input type="text" name="birthdate" onChange={this.onChange} value={birthdate}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="birthdate" value={this.props.medicOne.map(data=> data.birthdate)}>
                     </input>} 
                  </div>
                <div className = "col s6"><h5>Sex:</h5>
                {this.state.edit?<input type="text" name="sex" onChange={this.onChange} value={sex}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="sex" value={this.props.medicOne.map(data=> data.sex)}>
                     </input>} 
                  </div>
                <div className = "col s6"><h5>Hospital:</h5>
                {this.state.edit?<input type="text" name="hospital" onChange={this.onChange} value={hospital}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="birthdate" value={this.props.medicOne.map(data=> data.hospital)}>
                     </input>} 
                  </div>
                <div className = "col s6"><h5>Role:</h5>
                {this.state.edit?<input type="text" name="position" onChange={this.onChange} value={position}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="position" value={this.props.medicOne.map(data=> data.position)}>
                     </input>} 
                  </div>
                <div className = "col s6"><h5>Address:</h5>
                {this.state.edit?<input type="text" name="address" onChange={this.onChange} value={address}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="address" value={this.props.medicOne.map(data=> data.address)}>
                     </input>} 
                  </div>
               <div className = "col s6"><h5>Email:</h5>
               {this.state.edit?<input type="text" name="email" onChange={this.onChange} value={email}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="email" value={this.props.medicOne.map(data=> data.email)}>
                     </input>} 
                 </div>
                <div className = "col s6"><h5>Phone Number:</h5> {this.state.edit?<input type="text" name="phone_number" onChange={this.onChange} value={phone_number}></input>
                 :<input style={{color:"#4267B2 ",fontWeight:"bold"}} type ="text" name="phone_number" value={this.props.medicOne.map(data=> data.phone_number)}>
                     </input>} </div>
                
                </div>
                
                </div>
        {/* ---------------------FOOTER */}

        <div class = "foot  white">
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
  medicOne :state.medicOnereducer.medicOne

});
export default connect(mapStateToProps,{updateMedics,getSpecMedic,logout})(AdminEditMedic);
