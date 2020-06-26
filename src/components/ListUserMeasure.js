import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {getSpecPatient} from '../actions/assessActions';
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
import {getUserMeasure,getSpecPatient} from '../actions/patientActions';
import {logout} from '../actions/auth';
import {loadUser} from '../actions/auth';


export class ListUserMeasure extends Component{
 
    state = {
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
        currentPage: 1,
      todosPerPage: 5,
      bgColor:'green',
      activeIndex:1,
        
        

    }

  
 
    static propTypes = {
        measures: PropTypes.array.isRequired,
        logout:PropTypes.func.isRequired,
        patientOnes:PropTypes.array.isRequired
      
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
      this.props.getUserMeasure();
      this.props.getSpecPatient(this.props.user.id);

    
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id) ,
      activeIndex: event.target.id
    });
  }

  render(){
    const created_at = [this.props.measures.sort((a,b)=>(-1*(a.id-b.id))).map(data=>data.created_at)]
    const { todos, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.measures.sort((a,b)=>(-1*(a.id-b.id))).slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.measures.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li style={{display:"inline",marginLeft:"5px"}}
            key={number}
            id={number}
            onClick={this.handleClick.bind(this)}
            className={number==this.state.activeIndex?"btn blue darken-4 white-text":"btn white black-text"}
          >
            {number}
          </li>
        );
      });

        return (
            <div className="background  ">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper white darken-1">
                             <div class="container">
                                 <a href="#" class="brand-logo blue-text  text-darken-4">iCHARM</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">
                                 <li><NavLink to ="/userpatient" className="blue-text  text-darken-4"  ><span className="glyphicon glyphicon-home blue-text  text-darken-4"></span> Home</NavLink></li>
             			<li> <Link to ="/listusermeasure" className="btn blue darken-4 white-text"><span className="glyphicon glyphicon-th-list white-text"></span> Measures</Link></li>
                   
                   <li> <Link to ="/userprofile" className="blue-text  text-darken-4"><span className="	glyphicon glyphicon-user blue-text  text-darken-4"></span> Profile</Link></li>
                                 <li><a onClick = {this.props.logout.bind(this)} href="/login" class="blue-text  text-darken-4"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                 </ul>
                             </div>
                             </nav>
                         </div>
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>
                                 <li><a onClick={this.props.logout.bind(this)} href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                         </ul>           
                         <div className="row">
         <div className=" white col-lg-1 cold-md-12 col-sm-12 col-6  date-time-card" style={{borderRadius:"5px",border:"1px solid #0d47a1",borderBottom:"3px solid #0d47a1",borderTop:"3px solid #0d47a1"}}>
               
                {/* <label className="blue-text  text-darken-4">Name:</label>
               <label className="black-text">{created_at[0][0]}</label> */}
                <label className="blue-text text-darken-4">Name:</label>
               <label style={{}} className=" black-text"> { this.props.patientOnes.map(data=>data.name)} </label>
               <span style={{marginLeft:"100px"}} className="blue-text  text-darken-4 glyphicon glyphicon-calendar"></span>
              
               <label  className="blue-text  text-darken-4">Last Updated:</label>
               <label className="black-text">{created_at[0][0]}</label>
              
               <div className="list-graph right col" style={{marginRight:"0px"}} ><button id = "padright" className="list btn blue darken-4 lighten-3"><i className=" white-text glyphicon glyphicon-th-list"></i>{'  '}
        <Link to ="/listusermeasure">List</Link></button>
        <button className="chart btn blue darken-4 lighten-3"id = "padright"><i className=" white-text glyphicon glyphicon-signal"></i>{'  '}<Link to="/usermeasures">Graph </Link></button>
        <button style={{marginLeft:"5px",paddingTop:"-px"}} onClick={this.props.getUserMeasure.bind(this)}
        className="btn blue darken-4 lighten-3 white-text  right"><span className="glyphicon glyphicon-refresh"></span></button>
             
        </div>


               </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="inline">
              
               
            
          
               </div>
              
               </div>
               <br></br>
              
               <br></br><br></br><br></br>
             <div className="col-lg-10 col-md-12 col-sm-12 col-12 " style={{borderRadius:"100px",marginLeft:"-15px",width:"88.6%"}}>
             <table className="table2" style={{border:"2px solid #0d47a1",borderBottom:"5px solid #0d47a1"}}>
                 {this.state.displayrisk}
                <tr style={{borderRadius:"100px",borderBottom:"2px solid #0d47a1"}}>
                    <th className="blue darken-4  white-text"> Date</th>
                    <th className="blue darken-4 white-text" >Systolic</th>
                    <th className="blue darken-4 white-text">Diastolic</th>
                    <th className="blue darken-4 white-text">Cholesterol</th>
                    <th className="blue darken-4 white-text">Weight</th>
                    <th className="blue darken-4 white-text">BMI</th>
                    <th className="blue darken-4 white-text">HIGH RISK PROBABILITY</th>
                    <th className="blue darken-4 white-text">LOW RISK PROBABILITY</th>
                    <th className= "blue darken-4 white-text">RISK</th>
                </tr>
                
        {currentTodos.map(data=>(<tr>
            <td>{data.created_at}</td>
            <td className="black-text text-darken-2"><b>{data.systolic} mmHg</b></td>
            <td className="black-text text-darken-2"><b>{data.diastolic} mmHg</b></td>
            <td className="black-text text-darken-2"><b>{data.cholesterol} mg/dL</b></td>
            <td className="black-text text-darken-2"><b>{data.weight} kg</b></td>
            <td  className="black-text text-darken-2"><b>{data.BMI}</b></td>
            <td className="red-text text-lighten-2"><b>{data.risk_proba1}%</b></td>
            <td className="green-text "><b>{data.risk_proba0}%</b></td>
        <td className="blue-text  text-darken-4"><b>{data.risk=='1'?"HIGH":"LOW"}</b></td>


            </tr>
        ))}
                    {/* <td className="green-text">120</td>
                    <td className="blue-text">80</td>
                    <td className="red-text text-lighten-2">80</td>
                    <td className="orange-text text-lighten-1">200</td>
                    <td className="pink-text text-lighten-2">65</td>
                    <td className="grey text-lighten-2">25</td>
                    <td className="red-text text-lighten-1">50%</td> */}
            

             </table>
             <ul id="page-numbers" style={{float:"right"}}>
             {renderPageNumbers}
         </ul>
            
             </div>
             <div className = "graph-small">
          
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
    patientOnes:state.patientOnereducer.patientOne,
    user :state.userreducer.user

});

export default connect(mapStateToProps,{loadUser,getSpecPatient,getUserMeasure,logout})(ListUserMeasure);
/**
  */