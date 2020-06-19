import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateRisk} from '../actions/patientActions';
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

export class EditPatient extends Component{
 
    state = {
        patientOne:[],
        measurements:[],
        systolic:[],
        all:{},
        risk:{},
        sys:{},
        dia:{},
        weight:{},
        cholesterol:{},
        truesys:{},
        cholesterol2:{},
        displayrisk1:"",
        displayrisk0:'',
        displaysys:'',
        displaydia:'',
        displayweight:'',
        displaychol:'',
        latest_id:'',
        desc:{},
        refresh:false,
        show:false,
        display:true,
        currentPage: 1,
      todosPerPage: 5,
      bgColor:'green',
      activeIndex:1,
      smoker:'',
      edit_risk:false,
      risk_proba0:'',
      risk_proba1:''
        
        

    }
    static propTypes ={
      updateRisk:PropTypes.func.isRequired,
      logout:PropTypes.func.isRequired
    }
  onChange=e=> this.setState({[e.target.name]:e.target.value})

  componentDidMount(){
    this.getMeasurement();
        
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
  getMeasurement(){
    const patientID = this.props.match.params.patientID; 
    //this.props.getSpecPatient(patientID);
    axios.get(`http://192.168.1.3:8000/api/getspecific/?id=${patientID}`).then(res=>{this.setState({patientOne:res.data});console.log(res.data)});
            axios.all([axios.get(`http://192.168.1.3:8000/api/specrisk/?id_number=${patientID}`),
           axios.get(`http://192.168.1.3:8000/api/specmeasure/?id_number=${patientID}`)])
     .then(axios.spread((firstResponse, secondResponse) => {  
         const risk = firstResponse.data
         const measure  =secondResponse.data
         const measure2 = secondResponse.data
         
        //  const measure2 = secondResponse.data;
         console.log(measure);
         console.log(risk)
        // const measure = measure2.map(function(test1){return{systolic:test1.systolic,diastolic:test1.diastolic,weight:test1.weight,
            // cholesterol:test1.cholesterol}});
         const lat_id = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.id);
         const lat_risk1 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba1);
         const lat_risk0 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba0);
         const lat_sys = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.systolic);
         const lat_dia = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.diastolic);
         const lat_wei = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.weight);
         const lat_chol = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.cholesterol);
         this.setState({
           measurements:secondResponse.data,
           latest_id:lat_id[lat_id.length-1],
           displayrisk1:lat_risk1[lat_id.length-1],
           displayrisk0:lat_risk0[lat_id.length-1],
           displaysys:lat_sys[lat_id.length-1],
           displaydia:lat_dia[lat_id.length-1],
           displayweight:lat_wei[lat_id.length-1],
           displaychol:lat_chol[lat_id.length-1],
           desc:measure[measure.length-1],
          risk:{
            labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
        datasets:[
                {
                    label:"CVD High Risk",
                    borderColor: "#ef9a9a",
                    fill:false,
                    lineTension:0.3,
                    backgroundColor:"rgba(124, 179, 66,0.2)",
                  data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba1)
                },
                {
                  label:"CVD Low Risk",
                  
                  borderColor: "#0d47a1 ",
                          fill:false,
                          lineTension:0.3,
                          backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba0)
              }]

                },
                  
                sys:{
                    labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
                datasets:[
                        {
                            label:"Systolic Pressure",
                            borderColor: "#ef9a9a ",
                            fill:false,
                            lineTension:0.5,
                            data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.systolic)
                        },
                        {
                          label:"Diastolic Pressure",
                          borderColor: "#0d47a1 ",
                          fill:false,
                          lineTension:0.3,
                          backgroundColor:"rgba(124, 179, 66,0.2)",
                          data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
                      }]
        
              },
              dia:{
                labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
            datasets:[
                    {
                        label:"Diastolic Pressure",
                        borderColor: "#00bcd4 ",
                        fill:false,
                        lineTension:0.5,
                        backgroundColor:"rgba(124, 179, 66,0.2)",
                        data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
                    }]
        
          },
          weight:{
            labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
        datasets:[
                {
                    label:"Weight",
                    borderColor: "#0d47a1  ",
                    fill:false,
                    lineTension:0.5,            
                   
                    data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.weight)
                }]
        
        },
        
        cholesterol:{
            labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
        datasets:[
                {
                    label:"Cholesterol Level",
                    borderColor: "#ef9a9a",
                    fill:false,
                    lineTension:0.5,
                    backgroundColor:"rgba(200, 200, 0,0.2)",
                    data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.cholesterol)
                },
                {
                  label:"Systolic Pressure",
                  borderColor: "rgba(0, 200, 0)",  
                  lineTension:0.4,
                  fill:false,
                  data:measure2.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.systolic)
              },
              {
                label:"Diastolic Pressure",
                borderColor: "#2196f3",
                fill:false,
                lineTension:0.3,
                backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
            },
            {
              label:"Weight",
              borderColor: "#0d47a1",
              fill:false,
              lineTension:0.2,            
              backgroundColor:"rgba(255, 183, 77,0.2)",
              data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.weight)
          }
              ]
        
        },
        cholesterol2:{
          labels:measure.sort((a,b)=>(-1* (b.id-a.id))) .map(test=>test.created_at),
      datasets:[
              {
                  label:"Cholesterol Level",
                  borderColor: "#0d47a1  ",
                  fill:false,
                  lineTension:0.5,
                
                  data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.cholesterol)
              }
            ]
      
      }
    
    });
     }))
     .catch(error => console.log(error));

  }
  saveNewRisk=(e)=>{
    e.preventDefault();
    var risk = ''
    const {risk_proba0,risk_proba1} = this.state;
    if(risk_proba0=='' || risk_proba1==''){
    this.setState({edit_risk:false});
    }
    else if(risk_proba0!='' && risk_proba1!=''){
    if(Number(risk_proba0)>Number(risk_proba1)){
      risk = '0';  
    }
    else{
      risk='1';
    }
    const newRisk = {risk_proba0,risk_proba1,risk};
    console.log(newRisk);
    
    const patientID = this.props.match.params.patientID;
    axios.patch(`http://192.168.1.3:8000/api/measurement/${this.state.latest_id}/`,newRisk).then(res=>
    {
      axios.get(`http://192.168.1.3:8000/api/specmeasure/?id_number=${patientID}`).then(res=>
    { const measure = res.data;
      const lat_risk1 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba1);
      const lat_risk0 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba0);
      this.setState({
        displayrisk1:lat_risk1[lat_risk1.length-1],
           displayrisk0:lat_risk0[lat_risk0.length-1],
        risk_proba0:'',risk_proba1:'',
        risk:{
          labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
      datasets:[
              {
                  label:"CVD High Risk",
                  borderColor: "#e57373",
                  fill:false,
                  lineTension:0.3,
                  backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba1)
              },
              {
                label:"CVD Low Risk",
                
                borderColor: "#00bcd4",
                        fill:false,
                        lineTension:0.3,
                        backgroundColor:"rgba(124, 179, 66,0.2)",
              data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba0)
            }]

              },
              edit_risk:false

      });
    }
    
    )
    this.getMeasurement();

    });
    
  }
  
  }
  showAll(){
    this.setState({show:!this.state.show,display:!this.state.display})
}
handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id) ,
    activeIndex: event.target.id
  });
}
    render(){
      const {risk_proba1,risk_proba0} = this.state
      var diabetes = this.state.patientOne.map(data=>data.is_dia);
      var main_diabetes = diabetes[0];
      console.log(main_diabetes);
      const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.measurements.sort((a,b)=>(-1*(a.id-b.id))).slice(indexOfFirstTodo, indexOfLastTodo);
        const test = this.state.measurements.sort((a,b)=>(-1*(a.id-b.id))).map(data=>data.id);
        console.log(test);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.measurements.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li style={{display:"inline",marginLeft:"8px"}}
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
            <div className="background  grey lighten-5">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper white lighten-3  " >
                             <div class="container">
                                 <a href="#" class="brand-logo blue-text text-darken-4">iCHARM Portal</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">
                                 <li><NavLink to ="/patient" className="btn blue darken-4 white-text text-lighten-2" ><span className="glyphicon glyphicon-align-left"></span>Patient Records</NavLink></li>
             			<li> <Link to ="/medicprofile" className="blue-text text-darken-4"><span className="	glyphicon glyphicon-user"></span>Profile</Link></li>
                                 <li><a onClick = {this.props.logout.bind(this)} href="/login" class="text-darken-4 blue-text"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                                 </ul>
                             </div>
                             </nav>
                         </div>
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/medicprofile">Profile</Link></li>
                                 <li><a  onClick ={this.props.logout.bind(this)} href="/" class="btn white cyan-text text-lighten-2">Logout</a></li>
                         </ul>
                         <div className="white header-pat" 
                         style={{borderRadius:"5px",border:"1px solid #0d47a1",borderBottom:"3px solid #0d47a1",borderTop:"3px solid #0d47a1"}}>
              <span className="blue-text text-darken-4 pat_info	glyphicon glyphicon-user"></span><label className="blue-text text-darken-4">Name:<test className="black-text text-darken-4">{this.state.patientOne.map(data=>data.name)}</test></label>
              <span className="blue-text text-darken-4 pat_info		glyphicon glyphicon-calendar"></span><label className="blue-text text-darken-4  ">Birthdate:<test className="black-text text-darken-4">{this.state.patientOne.map(data=>data.birthdate)}</test></label>
              <span className="blue-text text-darken-4 pat_info	glyphicon glyphicon-time"></span><label></label ><i className="blue-text text-darken-4 " >Age:<test className="black-text text-darken-4">{this.state.patientOne.map(data=>data.age)}</test></i>
              <span className="blue-text text-darken-4 pat_info	fas fa-venus-mars"></span> <label></label><i className="blue-text text-darken-4">Sex:<test className="black-text text-darken-4">{this.state.patientOne.map(data=>data.sex)}</test></i>
              <span className="blue-text text-darken-4 pat_info 	glyphicon glyphicon-tint"></span><i className="blue-text text-darken-4">Diabetic:<test className="black-text text-darken-4">{main_diabetes==1?"NO":"YES"}</test></i>
              <span className="blue-text text-darken-4 pat_info 	glyphicon glyphicon-alert"></span><i className="blue-text text-darken-4">Smoker:<test className="black-text text-darken-4">{this.state.patientOne.map(data=>data.smoker)==1?"YES":"NO"}</test></i>
              <button onClick={this.getMeasurement.bind(this)}className="btn blue darken-4 right" style={{marginTop:"2px",paddingTop:"2px"}}><span className="	glyphicon glyphicon-refresh white-text"></span></button>
                        </div>
                         <div className="row">
                            <div className="col-lg-2 new_measure_card  white" style={{textAlign:"center", borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",borderBottom:"5px solid #0d47a1 "}}>
               
        <div className="blue darken-4 "style={{paddingLeft:"10px",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>
        <label><h6 className="white-text text-darken-4" style={{fontSize:"20px"}}><b>BP:</b><test className="white-text text-darken-4">{
        this.state.displaysys}/{this.state.displaydia}{'  '}hg/dl</test></h6></label>
        </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.sys}
                height='900px'
                width='900px'
                />
                </div>
                           <div className="col-lg-2 new_measure_card  white" style={{textAlign:"center", borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",borderBottom:"5px solid #0d47a1 "}}>
                <div className="blue darken-4" style={{paddingLeft:"10px",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>          
              <label><h6 className="white-text text-darken-4" style={{fontSize:"20px"}}>WEIGHT:<test className="white-text text-darken-4">{this.state.displayweight}{" "}kg</test> </h6></label>
                </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.weight}
                height='900px'
                width='900px'
                />
                           </div>
                           <div className="col-lg-2 new_measure_card  white" style={{textAlign:"center", borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",borderBottom:"5px solid #0d47a1 "}}>
                
               <div className="blue  darken-4 " style={{paddingLeft:"10px",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>
              <label><h6 className="white-text text-darken-4" style={{fontSize:"20px"}}>CHOLESTEROL:<test className="white-text text-darken-4">{this.state.displaychol}{"  "}hg/dl</test></h6></label>
               </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.cholesterol2}
                height='900px'
                width='900px'
                />
                           </div>
                           <div className="col-lg-4 new_measure_card_risk white" style={{paddingLeft:"10px",borderBottom:"5px ",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}  style={this.state.edit_risk?{height:"550px"}:null,{borderRadius:"10px"}}>
               
       
                           {/* <div className="col-lg-4 row new_measure_card_risk  white"> */}
                           <div className={this.state.edit_risk?"col-lg-6":"graphshow"}>
                             <label for="risk_proba1"><span className="glyphicon glyphicon-exclamation-sign blue-text text-darken-4"><b>HIGH RISK:</b></span> </label>
                             <input  onChange={this.onChange} type="text" name="risk_proba1" value={risk_proba1} placeholder="HIGH RISK PROBABILITY"/>
                            
                             </div>
                             
                             <div className={this.state.edit_risk?"col-lg-6":"graphshow"}>  
                             <label for="risk_proba0"><span className="glyphicon glyphicon-exclamation-sign blue-text text-darken-4"><b>LOW RISK:</b></span></label>
                             <input  onChange={this.onChange} type="text" name="risk_proba0" value={risk_proba0} placeholder="LOW RISK PROBABILITY"/>
                             
                             </div> <div className="blue darken-4  col-lg-12" style={{borderTopRightRadius:"5px",borderTopLeftRadius:"5px",paddingLeft:"20px",borderBottom:"2px solid lightgrey"}}>
             {/* <div className="cyan lighten-1 col-lg-12" style = {{textAlign:"center"}}> */}
              <label><h6 className="white-text text-darken-4 " style={{fontSize:"20px"}}>RISK PROBABILITY:<test className="white-text text-darken-4">HI={this.state.displayrisk1}%/LO={this.state.displayrisk0  }%</test></h6></label>
              <span className=" blue darken-4  lighten-3 right white-text" style={{marginTop:"5px"}} onClick={this.state.edit_risk?this.saveNewRisk.bind(this):()=>{this.setState({edit_risk:!this.state.edit_risk})}}> <span className="glyphicon glyphicon-pencil white-text text-darken-4"></span></span>
             </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.risk}
                height='800px'
                width='1000px'
                />
                           </div>
                         
                           <br/>
                           </div>
                           <div className="row">
                           <div className="col-lg-6 new_list_card  " 
                            style={this.state.edit_risk?{marginTop:"-250px",borderBottom:"10px solid #0d47a1"}:{borderBottom:"10px solid #0d47a1"},{border:"2px solid #0d47a1"
                            ,borderBottom:"5px solid #0d47a1",borderRadius:"5px"}}>
                             <table className="striped "  >
                 
                <tr style={{borderRadius:"5",borderTop:"2px solid #0d47a1",borderBottom:"2px solid #0d47a1"}}>
                    <th className="blue darken-4 white-text text-darken-2"> Date</th>
                    <th className="blue darken-4 white-text text-darken-2" >Systolic</th>
                    <th className="blue darken-4 white-text text-darken-2">Diastolic</th>
                    <th className="blue darken-4 white-text text-darken-2">Cholesterol</th>
                    <th className="blue darken-4 white-text text-darken-2">Weight</th>
                    <th className="blue darken-4 white-text text-darken-2">BMI</th>
                    <th className="blue darken-4 white-text text-darken-2">LOW RISK</th>
                    <th className="blue darken-4 white-text text-darken-2">HIGH RISK</th>
                    <th className= "blue darken-4 white-text text-darken-4">RISK</th>
                </tr>
                
       
                {currentTodos.map(data=>(<tr key={data.id}>
            <td className="white black-text">{data.created_at}</td>
            <td className="white black-text text-darken-4"><b>{data.systolic}</b></td>
            <td className="white black-text text-darken-4"><b>{data.diastolic}</b></td>
            <td className="white black-text text-darken-4"><b>{data.cholesterol}</b></td>
            <td className="white black-text text-darken-4"><b>{data.weight}</b></td>
            <td  className="white black-text text-darken-4"><b>{data.BMI}</b></td>
            <td className="white green-text text-darken-3"><b>{data.risk_proba0}</b></td>
            <td className="white red-text text-darken-1"><b>{data.risk_proba1}</b></td>
        <td className="white blue-text text-darken-4"><b>{data.risk=='1'?"HIGH":"LOW"}</b></td>


            </tr>
        ))}
            

             </table>
             <ul id="page-numbers" style={{float:"right",marginRight:"10px"}}>
             {renderPageNumbers}
         </ul></div>
                           {/* <div className="col-lg-5 new_risk_card card-panel white">
                           <label><h6 className="blue-text ">RISK PROBABILITY</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.risk}
                height='500px'
                width='1000px'
                />
                           </div> */}
      
           </div>
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


export default connect(null,{updateRisk,logout})(EditPatient);
/**
  */