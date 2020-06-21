import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecPatient} from '../actions/assessActions';
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
import {getUserMeasure,addPatients} from '../actions/patientActions';
import {loadUser,logout} from '../actions/auth';

export class UserPatient extends Component{

constructor(props)  {
  super(props); 
    this.state = {
        patientOne:[],
        medicOne:[],
        systolic:[],
        all:{},
        risk:{},
        sys:{},
        dia:{},
        weight:{},
        cholesterol:{},
        truesys:{},
        cholesterol2:{},
        displayrisk:[],
        desc:{},
        refresh:false,
        test:props.user.id
        
        

    }
  }

    static propTypes = {
      measures: PropTypes.array.isRequired,
      user:PropTypes.array.isRequired,
      logout:PropTypes.func.isRequired
    }

  componentDidMount(){
    this.props.getUserMeasure();
    this.props.loadUser();
    
    axios.get(`http://icharmapi.herokuapp.com/api/getspecific/?id=${this.props.user.id}`)
    .then(res=>{
      const medic = res.data;
      console.log(medic);
      const medicreal = medic.map(function(data){return(data.owner_id)})
      console.log(medicreal[0]);
      axios.get(`http://icharmapi.herokuapp.com/api/medicforuser/?id=${medicreal[0]}`).then(res=>this.setState({medicOne:res.data}))
      
    
    });
   // const medic = this.state.patientOne.map(data=>data.owner_id);
    
  // axios.get(`http://192.168.1.8:8000/api/medicforuser/?id=${}`).then(res=>this.setState({medicOne:res.data}));

  }
  
  
  
  
    render(){
      console.log(this.state.medicOne);
      
      
      const sys = [this.props.measures.sort((a, b) => (-1* (a.id - b.id))).map(data=>data.systolic)]
      const dia = [this.props.measures.sort((a, b) => (-1* (a.id - b.id))).map(data=>data.diastolic)]
      const wei = [this.props.measures.sort((a, b) => (-1* (a.id - b.id))).map(data=>data.weight)]
      const gluc = [this.props.measures.sort((a, b) => (-1* (a.id - b.id))).map(data=>data.glucose)]
      const chol = [this.props.measures.sort((a, b) => (-1* (a.id - b.id))).map(data=>data.cholesterol)]
      const bmi = [this.props.measures.sort((a, b) => (-1* (a.id - b.id))).map(data=>data.BMI)]
      const risk_proba0 = [this.props.measures.sort((a,b)=>(-1* (a.id-b.id))).map(data=>data.risk_proba0)]
      const risk_proba1 = [this.props.measures.sort((a,b)=>(-1* (a.id-b.id))).map(data=>data.risk_proba1)]
      const risk = [this.props.measures.sort((a,b)=>(-1* (a.id-b.id))).map(data=>data.risk)]
      const created_at = [this.props.measures.sort((a,b)=>(-1*(a.id-b.id))).map(data=>data.created_at)]
      
        return (
            <div className="background  ">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper white">
                             <div class="container">
                                 <a href="#" class="brand-logo blue-text text-darken-4">iCHARM</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">
                                 <li><NavLink to ="/userpatient" className="btn blue darken-4 white-text" ><span className="glyphicon glyphicon-home"></span> Home</NavLink></li>
             			<li> <Link to ="/listusermeasure" className="blue-text text-darken-4"><span className=" blue-text text-darken-4 glyphicon glyphicon-th-list"></span> Measures</Link></li>
                   
                   <li> <Link to ="/userprofile" className="blue-text text-darken-4"><span className="blue-text text-darken-4	glyphicon glyphicon-user"></span> Profile</Link></li>
                   <li><Link onClick = {this.props.logout.bind(this)} to="/" class="blue-text text-darken-4"><span className="glyphicon glyphicon-log-out"></span>Logout</Link></li>
                    </ul>
                             </div>
                             </nav>
                         </div>
                         {/* SIDENAVVVVVVVVVVV */}
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient"></Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>

                <li><a href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                         </ul> 
                         

                         {/* lamaaaaaaaaaaaaaaaaaaaaan */}

                         <div class = "contenty">

                            <div class = "productsz">

                        <div class = "produkto11 left" style={{borderRadius:"5px"}}>
                        <div class = "blue darken-4" style={{borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}><label class = "white-text" id = "titlesize"> <i className=" nav-gear	glyphicon glyphicon-cog white-text"></i> Navigation Guide</label></div>
                        <div>
                        <ul className="black-text text-darken-3">
                              <li><i className="	glyphicon glyphicon-home blue-text text-darken-4" id = "navs"></i>press to go to Homepage</li>
                              <li><i className="glyphicon glyphicon-list blue-text text-darken-4" id = "navs"></i>press to go to Measures</li>
                              
                              <li><i className="glyphicon glyphicon-user blue-text text-darken-4" id = "navs"></i>press to go to Profile</li>
                              </ul>
                        
                        </div>
                  

                        </div>
                        <div class = "produkto11 left" style={{borderRadius:"5px"}}>
                        <div class = "blue darken-4" style={{borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}} id = "hu"><label class = "white-text" id = "titlesize"> <i className=" nav-gear	glyphicon glyphicon-heart white-text"></i> Your CVD Risk</label></div>
        <div class = "center"><h4><b>{risk_proba1[0][0]}</b></h4><br/><label class = "black-text">{risk[0][0]==null?null:risk[0][0]==1?"HIGH RISK":"LOW RISK"}</label><br/>{created_at[0][0]}</div>
                            </div>
                        


                        </div>



                        {/* 12121212121212 */}


                        <div class = "productsz">

                        <div class = "produkto11 left" style={{borderRadius:"5px"}}>
                        <div class = "blue darken-4"><label class = "white-text" id = "titlesize"> <i className=" nav-gear	glyphicon glyphicon-stats white-text"></i> Recent Measurements</label></div>
                        <div class = "left" id = "lefty"> 
                            <label class = "black-text text-darken-3">Date:{created_at[0][0]}</label><br/>
                            <label class = "black-text text-darken-3">Systolic:{sys[0][0]}/hg</label><br/>
                            <label class = "black-text text-darken-3">Diastolic:{dia[0][0]}/hg</label><br/>
                            <label class = "black-text text-darken-3">Cholesterol:{chol[0][0]} mg/dl</label><br/>
                            <label class = "black-text text-darken-3">Weight:{wei[0][0]} kg</label><br/>
                            <label class = "black-text text-darken-3">BMI:{bmi[0][0]}</label><br/>

                            </div>
                  

                        </div>
                        <div class = "produkto11 left" style={{borderRadius:"6px"}}>
                        <div class = "blue darken-4" id = "hu"><label class = "white-text" id = "titlesize"> <i className=" nav-gear	glyphicon glyphicon-heart white-text"></i>Your Doctor's Contacts</label></div>
                        <div class = "left" id = "lefty">
                          <br></br>
                            <label class = "black-text text-darken-3">Name:{this.state.medicOne.map(data=>data.name)}</label><br/>
                            <label class = "black-text text-darken-3">Role:{this.state.medicOne.map(data=>data.position)}</label><br/>
                            <label class = "black-text text-darken-3">Hospital:{this.state.medicOne.map(data=>data.hospital)}</label><br/>
                            <label class = "black-text text-darken-3">Contact Number:{this.state.medicOne.map(data=>data.phone_number)}</label><br/>
                            <label class = "black-text text-darken-3">Email:{this.state.medicOne.map(data=>data.email)}</label><br/>
                            </div>  
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
  measures :state.measurereducer.measure,
  user:state.userreducer.user

});
export default connect(mapStateToProps,{getUserMeasure,loadUser,logout})(UserPatient);
/**
  */