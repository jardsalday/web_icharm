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

export class PseudoEdit extends Component{
  constructor(props){
    super(props)
    this.paginate = this.paginate.bind(this)
    this.handleClick= this.handleClick.bind(this)
    this.state = {
        patientOne:{},
      currentPage:1,
      postPerPage:1,
      visible:false

  }
}
static propTypes = {
  assess: PropTypes.array.isRequired,
  getSpecPatient:PropTypes.func.isRequired

}
  handleClick=()=>this.setState({visible:!this.state.visible})
  componentDidMount(){
    
  }
  
    paginate =(pageNumber) => this.setState({currentPage:pageNumber});
    render(){
      const {currentPage,postPerPage} = this.state;
      const indexOfLastPost= currentPage*postPerPage;
      const indexOfFirstPost=indexOfLastPost-postPerPage;
      const patientID = this.props.match.params.patientID; 
      

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
            			<li> <Link to ="/admin"><span className="	glyphicon glyphicon-user"></span>Admin</Link></li>
                                <li><a href="/login" class="white-text"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>
                                <li><a href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                        </ul>           
                        <div className="row">
        <div className=" white col-lg-12 cold-md-12 col-sm-12 col-12   date-time-card">
              <span className="red-text text-lighten-2 glyphicon glyphicon-calendar"></span>
               <label className="red-text text-lighten-2">Last Updated:</label>
              <label className="grey-text">1/1/19</label>
              <label className="grey-text">9:15 AM</label>
              </div>
             <div className="col-lg-12 col-md-12 col-sm-12">
               <div className="inline">
                 {/* <div className=" profile col s7"> */}
              <div className="profile  col-lg-3 col-md-3 col-sm-4 col-1 ">
              <div className=" grey-text text-lighten-3">
              <span className="red-text text-lighten-2	fa fa-file"></span> <i className="red-text text-lighten-2">IDENTITY:</i>
              <br></br>
                <span className="red-text text-lighten-2 	glyphicon glyphicon-user"></span><label className="">Vincent Angelo Calingasan</label>
              <br></br>
              <span className="red-text text-lighten-2	glyphicon glyphicon-calendar"></span><label></label><i>21</i>
              <br></br>
             <span className="red-text text-lighten-2	fas fa-venus-mars"></span> <label></label><i>Male</i>
              <br></br>
              <span className="red-text text-lighten-2 fas fa-home"></span><i>Batangas,Batangas</i>
              </div>
              </div>
              
              
              <div className="col-lg-3 col-md-3 col-sm-4 col-1 white lighten-3 report-card2">
         
              <span className="red-text text-lighten-2 fa fa-heart"></span><span className="red-text text-lighten-2 ">HEALTH STATUS</span><br></br> 
              <i>BP:</i><i className="green-text text-lighten-1">HIGH</i><span className="green-text text-lighten-1	glyphicon glyphicon-exclamation-sign"></span><br></br>
              <i>Wt:</i><i className="grey-text text-darken-1 ">NORMAL</i><br></br>
              <i>Chol:</i><i className="grey-text  text-darken-1 ">NORMAL</i><br></br>
              <i>Activity</i><i className="green-text text-lighten-1">HIGH</i><span className="green-text text-lighten-1	glyphicon glyphicon-exclamation-sign"></span>
              
              </div>
              </div>
              <div className=" col-lg-3 col-md-2 col-sm-12 col-3 report-card green lighten-2">
              <label className="white-text">CVD RISK:</label><br></br>
              <label className="white-text predict">NEGATIVE</label><br></br>
              <label className="white-text predict_proba">10%</label>
              </div>
              </div>
              <br></br>
              <br></br><br></br><br></br><br></br><br></br>
          
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 card-graph">
            <div className=" header-analytics col-lg-12 red-text text-lighten-2"><span className=" glyphicon glyphicon-signal"></span>{' '}<label className="red-text text-lighten-2">Analytics</label>{' '}<span className=" glyphicon glyphicon-signal"></span></div>
            <div className="grapher col-lg-7 col-md-12 col-sm-12 "><Graph/></div>
            <div className=" risk col-lg-5 col-md-12 col-sm-12"><RiskGraph/></div>
            
            
            </div>
            <div className = "graph-small">
            
            </div>
          </div>
            
                
      </div>
        );


    }




}
const mapStateToProps = state =>({
  assess :state.assess.assess

});

export default connect(mapStateToProps,{getSpecPatient})(PseudoEdit);
/**
  */