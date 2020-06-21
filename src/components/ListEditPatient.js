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

export class ListEditPatient extends Component{
 
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
        show:false,
        display:true,
        measurements:[]
        
        

    }

  test120(){
    const send = {sugar:120}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  test140(){
    const send = {sugar:140}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  test160(){
    const send = {sugar:160}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  test180(){
    const send = {sugar:180}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  test200(){
    const send = {sugar:200}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  test220(){
    const send = {sugar:220}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  test240(){
    const send = {sugar:240}
    axios.post('http://icharmapi.herokuapp.com/api/loglog/',send).then(res=>console.log(res.data));
  }
  refresh1(){
    this.setState({refresh:!this.state.refresh})
      console.log("HIGH");
      const holder ="1";
      const send = {holder};
      axios.post('http://icharmapi.herokuapp.com/api/log/',send).then(res=>console.log(res.data))
    
    // else{
    //   console.log("LOW");
    //   const holder = "0";
    //   const send2 = {holder};
    //   axios.post('http://192.168.1.8:8000/api/log',send2).then(res=>console.log(res.data))
    // }
  }
  refresh2(){
    this.setState({refresh:!this.state.refresh})
      console.log("LOW");
      const holder ="0";
      const send = {holder};
      axios.post('http://icharmapi.herokuapp.com/api/log/',send).then(res=>console.log(res.data))
    
    // else{
    //   console.log("LOW");
    //   const holder = "0";
    //   const send2 = {holder};
    //   axios.post('http://192.168.1.8:8000/api/log',send2).then(res=>console.log(res.data))
    // }
  }

  componentDidMount(){
    const patientID = this.props.match.params.patientID; 
    //this.props.getSpecPatient(patientID);
    axios.get(`http://icharmapi.herokuapp.com/api/getspecific/?id=${patientID}`).then(res=>{this.setState({patientOne:res.data});console.log(res.data)});
            axios.all([axios.get(`http://icharmapi.herokuapp.com/api/specrisk/?id_number=${patientID}`),
           axios.get(`http://icharmapi.herokuapp.com/api/specmeasure/?id_number=${patientID}`)])
     .then(axios.spread((firstResponse, secondResponse) => {  
       this.setState({measurements:secondResponse.data});
         const risk = firstResponse.data
         const measure  =secondResponse.data
         const measure2 = secondResponse.data
         console.log(risk[risk.length-1].risk_proba)
        //  const measure2 = secondResponse.data;
         console.log(measure);
         console.log(risk)
        // const measure = measure2.map(function(test1){return{systolic:test1.systolic,diastolic:test1.diastolic,weight:test1.weight,
            // cholesterol:test1.cholesterol}});
        
         this.setState({
           displayrisk:risk[risk.length-1].risk_proba,
           desc:measure[measure.length-1],
          risk:{
            labels:risk.map(test=>test.created_at),
        datasets:[
                {
                    label:"CVD Risk",
                    borderColor: "rgb(229, 115, 115)",
                    fill:true,
                    lineTension:0,
                    backgroundColor:"rgba(229, 115, 115,0.2)",
                  data:risk.map(test=>test.risk_proba)
                }]

                },
                  
                sys:{
                    labels:measure.map(test=>test.created_at),
                datasets:[
                        {
                            label:"Systolic Pressure",
                            borderColor: "#66bb6a",
                            lineTension:0.5,
                            data:measure.map(test=>test.systolic)
                        }]
        
              },
              dia:{
                labels:measure.map(test=>test.created_at),
            datasets:[
                    {
                        label:"Diastolic Pressure",
                        borderColor: "#2196f3",
                        fill:true,
                        lineTension:0.5,
                        backgroundColor:"rgba(124, 179, 66,0.2)",
                        data:measure.map(test=>test.diastolic)
                    }]
        
          },
          weight:{
            labels:measure.map(test=>test.created_at),
        datasets:[
                {
                    label:"Weight",
                    borderColor: "#ffb74d",
                    fill:true,
                    lineTension:0.5,            
                    backgroundColor:"rgba(255, 183, 77,0.2)",
                    data:measure.map(test=>test.weight)
                }]
        
        },
        
        cholesterol:{
            labels:measure.map(test=>test.created_at),
        datasets:[
                {
                    label:"Cholesterol Level",
                    borderColor: "#ffee58",
                    fill:false,
                    lineTension:0.5,
                    backgroundColor:"rgba(200, 200, 0,0.2)",
                    data:measure.map(test=>test.cholesterol)
                },
                {
                  label:"Systolic Pressure",
                  borderColor: "rgba(0, 200, 0)",  
                  lineTension:0.4,
                  fill:false,
                  data:measure2.map(test=>test.systolic)
              },
              {
                label:"Diastolic Pressure",
                borderColor: "#2196f3",
                fill:false,
                lineTension:0.3,
                backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.map(test=>test.diastolic)
            },
            {
              label:"Weight",
              borderColor: "#ffb74d",
              fill:false,
              lineTension:0.2,            
              backgroundColor:"rgba(255, 183, 77,0.2)",
              data:measure.map(test=>test.weight)
          }
              ]
        
        },
        cholesterol2:{
          labels:measure.map(test=>test.created_at),
      datasets:[
              {
                  label:"Cholesterol Level",
                  borderColor: "#ffee58",
                  fill:true,
                  lineTension:0.5,
                  backgroundColor:"rgba(200, 200, 0,0.2)",
                  data:measure.map(test=>test.cholesterol)
              }
            ]
      
      }
    
    });
     }))
     .catch(error => console.log(error));
        
    //     axios.get('http://192.168.43.164:8000/api/risk/').then(res=>{ const array = res.data;this.setState({risk:{
    //         labels:array.map(test=>test.created_at),
    //     datasets:[
    //             {
    //                 label:"CVD Risk",
    //                 borderColor: "rgb(229, 115, 115)",
    //                 fill:true,
    //                 lineTension:0.5,
    //                 backgroundColor:"rgba(229, 115, 115,0.2)",
    //               data:array.map(test=>test.risk_proba)
    //             }]

    //   }
    
    
    // // });});
  }
  showAll(){
    this.setState({show:!this.state.show,display:!this.state.display})
}
  
    render(){
      
      

        return (
            <div className="background  grey lighten-3">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper red lighten-2">
                             <div class="container">
                                 <a href="#" class="brand-logo">iCHARM</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">
                                 <li><NavLink to ="/patient" className="btn white red-text text-lighten-2" ><span className="glyphicon glyphicon-align-left"></span>Patient Records</NavLink></li>
             			<li> <Link to ="/medicprofile"><span className="	glyphicon glyphicon-user"></span>Profile</Link></li>
                                 <li><a href="/login" class="white-text"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                                 </ul>
                             </div>
                             </nav>
                         </div>
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/medicprofile">Profile</Link></li>
                                 <li><a href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                         </ul>           
                         <div className="row">
         <div className=" white col-lg-12 cold-md-12 col-sm-12 col-6   date-time-card">
               <span className="red-text text-lighten-2 glyphicon glyphicon-calendar"></span>
                <label className="red-text text-lighten-2">Last Updated:</label>
               <label className="grey-text">1/1/19</label>
               <label className="grey-text">9:15 AM</label>
               </div>
               <div><div className=""><button className="list btn green"><i className=" white-text glyphicon glyphicon-th-list"></i>{'  '}
        <Link to ={`/listeditpatient/${this.state.patientOne.map(data=>data.user_id)}`}>List Form</Link></button>
        <button className="chart btn blue"><i className=" white-text glyphicon glyphicon-signal"></i>{'  '}<Link to={`/viewdetails/${this.state.patientOne.map(data=>data.user_id)} `} >Graph Form</Link></button></div><i onClick={this.state.refresh?this.refresh1.bind(this):this.refresh2.bind(this)}className="refresh glyphicon glyphicon-refresh"></i>
               </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="inline">
                  {/* <div className=" profile col s7"> */}
               <div className="profile  col-lg-3 col-md-3 col-sm-12 col-12 col-3 ">
               <div className=" grey-text text-lighten-3">
               <div className="card-header">
               <span className="red-text text-lighten-2	fa fa-file"></span>
                 {'   '}
                <i className="red-text text-lighten-2">IDENTITY</i>
                {'   '}
                <span className="red-text text-lighten-2	fa fa-file"></span>
               </div>
            
                 <span className="red-text text-lighten-2 	glyphicon glyphicon-user"></span><label className="">{this.state.patientOne.map(test=>{return(test.name)})}</label>
               <br></br>
               <span className="red-text text-lighten-2	glyphicon glyphicon-calendar"></span><label></label><i>{this.state.patientOne.map(test=>{return(test.birthdate)})}</i>
               <br></br>
              <span className="red-text text-lighten-2	fas fa-venus-mars"></span> <label></label><i>{this.state.patientOne.map(test=>{return(test.sex)})}</i>
               <br></br>
               <span className="red-text text-lighten-2 fas fa-home"></span><i>{this.state.patientOne.map(test=>{return(test.address)})}</i>
               </div>
               </div>
            
            
               <div className="col-lg-3 col-md-3 col-sm-6 col-3 white lighten-3 report-card2">
               <div className="card-header">
               <span className="red-text text-lighten-2 fa fa-heart"></span>
               <span className="red-text text-lighten-2 ">HEALTH STATUS</span>
               <span className="red-text text-lighten-2 fa fa-heart"></span>
               </div>
            
        <i>BP:</i><i onMouseEnter={this.test120.bind(this)}className="green-text text-lighten-1">{parseInt(this.state.desc.systolic)>=150 && parseInt(this.state.desc.diastolic)>=100?"HIGH":"NORMAL"}</i><span className="green-text text-lighten-1	glyphicon glyphicon-exclamation-sign"></span><br></br>
               <i>Wt:</i><i onMouseEnter={this.test140.bind(this)} className="grey-text text-darken-1 ">{(parseInt(this.state.desc.weight)+2)==62?"HIGH":"NORMAL"}</i><br></br>
        <i>Chol:</i><i onMouseEnter={this.test160.bind(this)} className="grey-text  text-darken-1 ">{parseInt(this.state.desc.cholesterol)>200?"HIGH":"NORMAl "}</i><br></br>
               <i>Activity</i><i onMouseEnter={this.test180.bind(this)} className="green-text text-lighten-1">HIGH</i><span className="green-text text-lighten-1	glyphicon glyphicon-exclamation-sign"></span>
            
               </div>
               </div>
               <div className=" col-lg-3 col-md-2 col-sm-3 col-3 report-card green lighten-2">
               <label onClick={this.test200.bind(this)} className="white-text">CVD RISK:</label><br></br>
        <label onClick={this.test220.bind(this)} className="white-text predict">{parseInt(this.state.displayrisk)>=50?"Positive":"Negative"}</label><br></br>
               <label onClick={this.test240.bind(this)} className="white-text predict_proba">{this.state.displayrisk}%</label>
               </div>
               </div>
               <br></br>
               <br></br><br></br><br></br><br></br><br></br>
               
               <div className="col-lg-12 col-md-12 col-sm-12 col-12 card-graph">
             <table className="table2">
                 
                <tr>
                    <th> Date</th>
                    <th className="green lighten-2 white-text" >Systolic</th>
                    <th className="blue lighten-2 white-text">Diastolic</th>
                    <th className="orange lighten-2 white-text">Cholesterol</th>
                    <th className="pink lighten-3 white-text">Weight</th>
                    <th className="grey lighten-2 white-text">BMI</th>
                    <th className="red lighten-2 white-text">RISK PROBABILITY</th>
                    <th className= "red white-text">RISK</th>
                </tr>
                
        {this.state.measurements.sort((a,b)=>(-1* (a.id-b.id))).map(data=>(<tr>
            <td>{data.created_at}</td>
            <td className="green-text">{data.systolic}</td>
            <td className="blue-text">{data.diastolic}</td>
            <td className="orange-text text-lighten-1">{data.cholesterol}</td>
            <td className="pink-text text-lighten-2">{data.weight}</td>
            <td  className="grey-text-lighten-2">{data.height}</td>
            <td className="red-text text-lighten-1">{data.risk_proba}</td>
        <td className="red-text">{data.risk}</td>


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
            
            
             </div>
             <div className = "graph-small">
          
             </div>
           </div>
        
                
      </div>
        );


    }




}


export default ListEditPatient;
/**
  */