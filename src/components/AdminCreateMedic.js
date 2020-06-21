import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecPatient,updatePatients,addMedic} from '../actions/patientActions';

export class AdminCreatePatient extends Component{
  constructor(props){
      super(props);
    
    this.state = {
        name:props.patientOne.map(data=>data.name),
        birthdate:'',
        sex:'',
        address:'',
        hospital:'',
        diabetes:'',
        password:'',
        username:'',
        doctor:'',
        suggestions:[],
        pseudo_medics:[],
        real_medics:[],
        email:'',
        phone_number:'',
        errName:false,
        errBirthdate:false,
        errSex:false,
        errAddress:false,
        errHospital:false,
        errPosition:false,
        errUser:false,
        errPass:false,
        errPhone:false,
        errMail:false


  }
}
    static propTypes = {
        updatePatients:PropTypes.func.isRequired,
        patientOne: PropTypes.array.isRequired,
        error:PropTypes.object.isRequired,
        addMedic:PropTypes.func.isRequired,
        //medics:PropTypes.array.isRequired
      
    }
    componentDidUpdate(prevProps){
        const {error}=this.props;
        if(error!==prevProps.error){
            if(error.msg.medicprofile.name){
            this.setState({errName:true});
            }
        else{
            this.setState({errName:false});
        }
        if(error.msg.medicprofile.birthdate){
            this.setState({errBirthdate:true});
        }
        else{
            this.setState({errBirthdate:false});
        }
        if(error.msg.medicprofile.sex){
            this.setState({errSex:true});
        }
        else{
            this.setState({errSex:false});
        }
        if(error.msg.medicprofile.address){
            this.setState({errAddress:true});
        }
        else{
            this.setState({errAddress:false});
        }
        if(error.msg.medicprofile.hospital){
            this.setState({errHospital:true});
        }
        else{
            this.setState({errHospital:false});
        } 
        if(error.msg.medicprofile.position){
            this.setState({errPosition:true});
        }
        else{
            this.setState({errPosition:false});
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
        if(error.msg.medicprofile.email){
            this.setState({errMail:true});
        }
        else{
            this.setState({errMail:false});
        }   
        if(error.msg.medicprofile.phone_number){
            this.setState({errPhone:true});
        }
        else{
            this.setState({errPhone:false});
        }                           
        }
          
    }
  onTextChanged=(e)=>{
      const value = e.target.value;
      let suggestions=[];
      if (value.length>0){
          const regex = new RegExp(`^${value}`,'i');
          suggestions = this.state.real_medics.sort().filter(v=>regex.test(v));
         
      }
      this.setState(()=>({suggestions}));
      this.setState({doctor:value});
  }
  
  suggestionSelected(value){
    this.setState(()=>({doctor:value,suggestions:[]}));


  }
  renderSuggestions(){
    const {suggestions} = this.state;
    if(suggestions.length==0){
        return null;
    }
    return (
        <ul>
            {suggestions.map(item=><li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
        </ul>

    )
  }
  componentDidMount(){
      console.log(this.state.name);
    //axios.get(`http://192.168.1.9:8000/api/getspecific/?id=${patientID}`).
    axios.get('http://icharmapi.herokuapp.com/api/getmedic/').then(res=>{const pseudo = res.data;
    console.log(pseudo);
    const real = pseudo.map(data=>data.name);
    this.setState({real_medics:real})});
  }
   
    onChange=e=> this.setState({[e.target.name]:e.target.value})

    onSubmit=e=>{
        
        e.preventDefault();
        const {name,birthdate,sex,address,hospital,position,password,username,phone_number,email} = this.state;
        const patrec={username,password,medicprofile:{name,birthdate,sex, address,hospital,position,phone_number,email}};
        this.props.addMedic(patrec);
        
        this.setState({name:'',birthdate:'',sex:'',address:'',hospital:'',position:'',password:'',username:'',phone_number:'',
    email:''});
        


    }
    render(){   
        console.log(this.state.real_medics);
        const{name,birthdate,sex,address,hospital,position,password,email,phone_number,password2,username} = this.state
        return (<div>
    <h6 className="header-form-text blue-text  text-darken-4 "><span className="glyphicon glyphicon-download-alt"></span>{'   '}Add MEDIC</h6>
            <div className="Form ">
               
            <form onSubmit={this.onSubmit}>
                    <label><h6>Name</h6></label>
                    <input type = "text" name="name" onChange = {this.onChange} value={name}></input>
        {/* {this.state.errName?<h6 className="errsize red-text">Must not be blank or Name already exists</h6>:null} */}
                            <div className = "row">
                    <div className="col s3">
                    <label><h6>Birthday</h6></label>
                    <input type = "text" name="birthdate" onChange = {this.onChange} value={birthdate}></input>
                    {/* {this.state.errBirthdate?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                    </div>
                    <div className="col s3">
                    <label><h6>Sex</h6></label>
                   
                    <input type = "text" name="sex" onChange = {this.onChange} value={sex}></input>
                    {/* {this.state.errSex?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                    </div>
                    <div className="col s3">
                    <label><h6>Hospital</h6></label>
                    <input type = "text" name="hospital" onChange = {this.onChange} value={hospital}></input>
                    {/* {this.state.errHospital?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                    </div>
                    <div className="col s3"><label><h6>Role</h6></label>
                    <input type="text" name="position" onChange = {this.onChange} value = {position} ></input>
                    {/* {this.state.errPosition?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                    </div>
                    </div>
                    <div className="row">
                    <div className="col s6">
                    <label><h6>Address</h6></label>
                    <input type = "text" name="address" onChange = {this.onChange} value={address}></input>
                    {/* {this.state.errAddress?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                   </div>
                   <div className="col s6">
                    <label><h6>Email</h6></label>
                       <input type ="text" name="email" onChange={this.onChange} value={email}></input>
                       {/* {this.state.errMail?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                       
                   </div>
                   </div>
                    <div className="row">
                   
                    <div className="col s4"><label><h6>Phone Number</h6></label>
                    <input type = "text" name = "phone_number" onChange = {this.onChange} value ={phone_number}></input>
                    {/* {this.state.errPhone?<h6 className="errsize red-text">Must not be blank</h6>:null} */}
                    </div>
                    <div className="col s4">
                    <label><h6 className="green-text">Usename</h6></label>
                    <input type = "text" name = "username" onChange={this.onChange} value={username}></input>
                    {/* {this.state.errUser?<h6 className="errsize red-text">Must not be blank or User Already Exist</h6>:null} */}
                    </div>
                    <div className="col s4">
                    <label><h6 className="green-text">Password</h6></label>    
                    <input type = "password" name = "password" onChange = {this.onChange} value = {password}></input>
                    {/* {this.state.errPass?<h6 className="errsize red-text">Must not be blank</h6>:null}             */}
                    </div>
                    
                    </div>
                    <div class="center-align">
                    <button  class="btn btn-large blue darken-4 " type="submit" value="submit"> <span className="glyphicon glyphicon-saved"></span>Add  </button>
                                    
                    </div>
                </form>
               
          
               
            </div>
            </div>
        );


    }




}
const mapStateToProps = state =>({
    patientOne :state.patientOnereducer.patientOne,
    error:state.errors,
    //medics:state.medicreducer.medics
    

});

export default connect(mapStateToProps,{getSpecPatient,updatePatients,addMedic})(AdminCreatePatient);
