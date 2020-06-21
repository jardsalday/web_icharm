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

export class AdminEditPatient extends Component{
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
        editDoctor:false,
        editPhone:false,
        editMail:false,
        name:'',
        birthdate:'',
        sex:'',
        address:'',
        height:'',
        is_dia:'',
        password:'',
        username:'',
        passwordsec:'',
        owner_id:'',
        phone_number:'',
        email:'',
        changePW:false,
        errPassword:false

    }
}
    static propTypes = {
        patientOne: PropTypes.array.isRequired,
        updatePatients:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired
      
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
     changeHeight(){
        this.setState({editHeight:true})
     }
     changeSex(){
        this.setState({editSex:true})
     }
     changeDiabetes(){
        this.setState({editDiabetes:true})
     }
     changeDoctor(){
         this.setState({editDoctor:true})
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
    saveDoctor=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {owner_id} = this.state;
        const patrec = {owner_id};
        this.props.updatePatients(patrec,id);
        this.setState({editDoctor:false});
    }
    savePassword=e=>{
        e.preventDefault();
        const id = this.props.match.params.patientID; 
        const {password,passwordsec} = this.state;
        if(password !=passwordsec){
            this.setState({errPassword:true})
        }
        else{
            this.setState({errPassword:false})

        }
        if(password.length==0||password.length==0){
            this.setState({noPass:true})
        }
        else{
            this.setState({noPass:false})
        }
        if(password == passwordsec){
            const old_password = password;
            const new_password = passwordsec;
            const patrec={old_password,new_password};
            axios.put(`http://icharmapi.herokuapp.com/api/changepw?id=${id}`,patrec).then(res=>console.log(res.data));
            alert("Password Changed");
            this.setState({password:'',passwordsec:'',changePW:false});
        }
        
    }
    saveMail=e=>{
        e.preventDefault();
        const id = this.props.patientOne.map(data=>data.id);
        const {email} = this.state;
        const patrec = {email};
        this.props.updatePatients(patrec,id);
        this.setState({editMail:false});
        
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
        // axios.get(`http://172.20.10.11:8000/api/getspecific/?id=${patientID}`).then(res=>{this.setState({admin_patient_one:res.data})});
        // axios.get(`http://192.168.1.8:8000/api/userspec/?id=${patientID}`).then(res=>{this.setState({admin_patient_user:res.data})});
    }
    render(){
       let addModalClose = ()=> this.setState({addModalShow:false});
       const{name,birthdate,sex,address,height,is_dia,phone_number,password,passwordsec,email} = this.state
        
        return (
            <div className=" background white">
                <div class="navbar-fixed">
                            <nav class="nav-wrapper white">
                            <div class="container">
                                <a href="#" class="brand-logo cyan">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                
             			<li> <Link to ="/adminpatients"  className="btn cyan white-text"><span className=" cyan-text glyphicon glyphicon-th-list"></span> Patient Records</Link></li>
                   <li> <Link to ="/adminmedics" className="cyan-text"><span className="cyan-text glyphicon glyphicon-user"></span> Medics Records</Link></li>
                   
<li><a onClick = {this.props.logout.bind(this)} href="/login" class="cyan-text"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/adminpatients">Patient Records</Link></li>
            			<li> <Link to ="/adminmedics">Medical Workers</Link></li>
                                <li><a onClick={this.props.logout.bind(this)} href="/login" class="btn white red-text"> Logout</a></li>
                        </ul>
                <br></br>
                         
                         
                

                <div className="row  ">
                <div className="col-lg-3"></div>               
                <div className=" card-panel white col-lg-5 col-md-6">
                <button className="editprofile btn green lighten-2 white-text right"><i className=" nav-gear	glyphicon glyphicon-ok white-text"></i></button>
                <h3>Edit Patient</h3>
                <div className = "col s6"><h5>Name:</h5><input type = "text" name="name" onChange = {this.onChange} value={this.state.editName?name:this.props.patientOne.map(data=>data.name)}></input></div>
                <div className = "col s6"><h5>Birthdate:</h5><input type = "text" name="birthdate" onChange = {this.onChange} value={this.state.editBirthdate?birthdate:this.props.patientOne.map(data=>data.birthdate)}></input></div>
                <div className = "col s6"><h5>Sex:</h5><input type = "text" name="sex" onChange = {this.onChange} value={this.state.editSex?sex:this.props.patientOne.map(data=>data.sex)}></input></div>
                <div className = "col s6"><h5>Height:</h5><input type = "text" name="height" onChange = {this.onChange} value={this.state.editHeight?height:this.props.patientOne.map(data=>data.height)}></input></div>
                <div className = "col s6"><h5>Diabetes:</h5><input type = "text" name="is_dia" onChange = {this.onChange} value={this.state.editDiabetes?is_dia:this.props.patientOne.map(data=>data.is_dia)}></input></div>
                <div className = "col s6"><h5>Address:</h5><input type = "text" name="address" onChange = {this.onChange} value={this.state.editAddress?address:this.props.patientOne.map(data=>data.address)}></input></div>
                <div className = "col s6"><h5>Email:</h5><input type = "text" name="email" onChange = {this.onChange} value={this.state.editMail?email:this.props.patientOne.map(data=>data.email)}></input></div>
                <div className = "col s6"><h5>Phone Number:</h5><input type = "text" name="phone_number" onChange = {this.onChange} value={this.state.editPhone?phone_number:this.props.patientOne.map(data=>data.phone_number)}></input></div>
                
                {this.state.changePW?<div className="col s6"><h6 className="red-text text-lighten-2">Type New Password</h6>
                <input type = "password" name = "password" onChange={this.onChange} value={password}></input>
                {this.state.errPassword?<h6 className="errsize red-text">Password do not matched</h6>:this.state.noPass?<h6 className="errsize red-text">Password fields must not be empty</h6>:null}
        </div>:null}
    
                  
                </div>

                
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
    patientOne :state.patientOnereducer.patientOne

});

export default connect(mapStateToProps,{getSpecPatient,updatePatients,logout})(AdminEditPatient);
