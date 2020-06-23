import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients,searchPatient} from '../actions/patientActions';
import {logout} from '../actions/auth';
import CreatePatient from './CreatePatient';
import {Link,NavLink,Redirect} from 'react-router-dom';

export class PatientComponent extends Component{
    state={
            ShowMe:true,
            search:'',
            currentPage: 1,
      todosPerPage: 3,
      bgColor:'green',
      activeIndex:1
    }
    static propTypes = {
        patient: PropTypes.array.isRequired,
        logout:PropTypes.func.isRequired
      
    }
    componentDidMount(){
      // this.props.getPatients();
       
          }
    
    searchName=e=>{
        e.preventDefault();
        const {search} = this.state
        if(search.length==0){
            console.log("YEAH")
        }
        else{
            this.props.searchPatient(search);
            if(this.state.currentPage!=1 && this.state.activeIndex!=1 ){
                this.setState({currentPage:1,activeIndex:1})
              }
        }
        }
    clearName=e=>{
        e.preventDefault();
        this.props.searchPatient("1");
    }

    onChange=e=> this.setState({[e.target.name]:e.target.value})     
    
    operation(){
        this.setState({ShowMe:false})
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id) ,
          activeIndex: event.target.id
        });
    }
    
    render(){
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.patient.slice(indexOfFirstTodo, indexOfLastTodo);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.patient.length / todosPerPage); i++) {
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
        const {search} = this.state
            const array = this.props.patient.map(pat=>pat.id)
        return (
            <div className=" background grey lighten-3">
                <div class="navbar-fixed">
                            <nav class="nav-wrapper white darken-1" style={{}}>
                            <div class="container">
                                <a href="#" class="brand-logo blue-text text-darken-4">iCHARM Portal</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/patient" className="try" activeClassName="btn blue darken-4 white-text "><span className="glyphicon glyphicon-align-left"></span> Patient Records</NavLink></li>
            			<li> <Link to ="/medicprofile" className="blue-text text-darken-4"><span className="	glyphicon glyphicon-user"></span> Profile</Link></li>
                                <li><Link onClick = {this.props.logout.bind(this)} to="/" class="blue-text text-darken-4"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/admin">Profile</Link></li>
                                <li><a onClick = {this.props.logout.bind(this)} class="btn white red-text">Logout</a></li>
                        </ul>
                <br></br>
                
                
                
                <div className="row  ">
               <div className="background2 col-lg-5 col-md-6" style={{height:"1000px",borderRadius:"5px",borderTop:"5px solid #0d47a1"},
              {border:"2px solid #0d47a1",borderTop:"8px solid #0d47a1",borderBottom:"8px solid #0d47a1",borderRadius:"5px"}}>
                <CreatePatient/>
                </div>
                
                <div  className="col-lg-6 col-md-6 col-sm-6 background3"
                 style={{height:"1000px",borderRadius:"5px",borderTop:"5px solid #0d47a1"},
                 {border:"2px solid #0d47a1",borderTop:"8px solid #0d47a1",borderBottom:"8px solid #0d47a1",borderRadius:"5px"}} >
                <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-6 col-6"><h6 className="header-form-text blue-text text-darken-4"><span className="glyphicon glyphicon-list"></span>Patient List</h6>
                </div>
                <div className=" search col-lg-6 col-md-1 col-sm-3 col-3">
                  <table className="tblsearch">
                  <tr>
                  <td><input className="searchbox" type="text" onChange={this.onChange} name="search" value={search}/></td> 
                  <td><button className="searchbtn btn blue darken-4 white-text" onClick={this.searchName.bind(this)}><span className="glyphicon glyphicon-search"></span></button>
                    </td>
                    <td>
                    <button onClick={this.clearName.bind(this)} className="clearbtn btn grey darken-3 white-text">CLEAR</button>
                    </td>
                    </tr>
                    </table>   
                  
                  </div>
                  </div>  
                    <table className="table table-striped table-hover table-condensed black-text" style={{color:"black"}} ref={el =>this.el = el} >
                        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Action</th>
            
            </tr></thead>
            <tbody id="myTable">
            {       
                   
                   // console.log(array)
                    currentTodos.sort((a, b) => (-1* (a.user_id - b.user_id))).map(patient =>(
                       <tr key={patient.user_id}>
                        <td>{patient.user_id}</td>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                         <td>{patient.sex}</td>
                         <td>{patient.address}</td>
                            
                          <td><button className="btn btn-small blue darken-4 white-text">
                              {'  '}
                                  <Link to={`/viewdetails/${patient.user_id}`}><span className="	glyphicon glyphicon-folder-open">
                                  </span></Link>
                              </button>
                              {'  '}<button className="btn btn-small blue-darken-3  white-text">
                                  {'  '}
                                      <Link to={`/patientedit/${patient.user_id}`}><span className="	glyphicon glyphicon glyphicon-edit">
                                      </span></Link>
                              </button>
                          </td>  
                         </tr>

                     )
                    


                     )

                }
            </tbody>
          </table>
          
          <ul id="page-numbers" style={{float:"right",marginRight:"50px"}}>
             {renderPageNumbers}
         </ul>
        
          </div>
         
          </div>
         
               
            </div>
        );


    }




}
const mapStateToProps = state =>({
    patient :state.patientreducer.patient

});
export default connect(mapStateToProps,{getPatients,addPatients,searchPatient,logout})(PatientComponent);
