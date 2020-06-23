import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchMedic} from '../actions/patientActions';
import {logout} from '../actions/auth';
import AdminCreateMedic from './AdminCreateMedic';
import {Link,NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AdminModal from './AdminModal';

//const TransitionGroup = React.addons.TransitionGroup;
export class AdminMedicalWorkers extends Component{
    state={
        admin_medics:[],
        search:'',
        currentPage: 1,
      todosPerPage: 3,
      bgColor:'blue darken-4 ',
      activeIndex:1,
      show:false
    
      }
      static propTypes={
        medics:PropTypes.array.isRequired,
        searchMedic:PropTypes.func.isRequired,
        logout:PropTypes.func.isRequired
      
      }
    componentDidMount(){
        //axios.get('http://172.20.10.11:8000/api/getmedic/').then(res=>{this.setState({admin_medics:res.data})})
      }
      searchName=e=>{
        e.preventDefault();
        const {search} = this.state
        if(search.length==0){
            console.log("YEAH")
        }
        else{
          this.props.searchMedic(search);
          if(this.state.currentPage!=1 && this.state.activeIndex!=1 ){
            this.setState({currentPage:1,activeIndex:1})
          }
           // axios.get(`http://192.168.1.8:8000/api/getmedic/?name=${search}`).then(res=>{this.setState({admin_medics:res.data});console.log(res.data)});
            // this.props.searchPatient(search);
        }
        }
    clearName=e=>{
        e.preventDefault();
        this.props.searchMedic("12345")
        //axios.get('http://192.168.1.8:8000/api/getmedic/?name=12345').then(res=>{this.setState({admin_medics:res.data})});
          
    }
    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id) ,
        activeIndex: event.target.id
      });
  }
  showHide(){
    this.setState({show:!this.state.show});
  }
    onChange=e=> this.setState({[e.target.name]:e.target.value}) 
    render(){
      const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.medics.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentTodos);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.medics.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handleClick.bind(this)}
                className={number==this.state.activeIndex?"btn blue darken-4  white-text":"btn white black-text"}
              >
                {number}
              </li>
            );
          });
      const {search} = this.state
       let addModalClose = ()=> this.setState({addModalShow:false});
        return (
            <div className=" background grey lighten-4">
                <div class="navbar-fixed">
                            <nav class="nav-wrapper white darken-1" >
                            <div class="container">
                                <a href="#" class="brand-logo blue-text  text-darken-4">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
             			<li> <Link to ="/adminpatients" className="blue-text  text-darken-4"><span className="glyphicon glyphicon-th-list"></span>Patients Records</Link></li>
                   <li> <Link to ="/adminmedics" className="btn blue darken-4  white-text text-darken-1" ><span className="glyphicon glyphicon-globe"></span>Medics Records</Link></li>
                   <li><NavLink to ="/medicprofile" className="blue-text  text-darken-4"  ><span className="blue-text  text-darken-4 glyphicon glyphicon-user"></span> Profile</NavLink></li>
<li><a onClick={this.props.logout.bind(this)} href="/login" class="blue-text  text-darken-4"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/adminpatients">Patient Records</Link></li>
                            <li> <Link to ="/adminmedics">Medical Workers</Link></li>
                            <li> <Link to ="/medicprofile">Profile</Link></li>
                                <li><a onClick = {this.props.logout.bind(this)} href="/login" class="btn white red-text"> Logout</a></li>
                        </ul>
                <br></br>
                         
                         
                

                <div className="row">
                {/* <button className="btn blue darken-4  white-text add-medic" onClick={this.showHide.bind(this)}>{this.state.show?<span>HIDE FORM</span>:<span>ADD MEDIC</span>}</button> */}
                <div className="col-lg-5 col-md-6 col-sm-12 background2 "><AdminCreateMedic/></div>
                <div className="col-lg-6 col-md-6 col-sm-12 background3">
                <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-6 col-6"><h6 className="header-form-text blue-text  text-darken-4 "><span className="glyphicon glyphicon-list"></span>Medics List</h6>
                </div>
                <div className=" search col-lg-2 col-md-1 col-sm-3 col-3">
                <table className="tblsearch">
                  <tr>
                  <td><input style={{marginLeft:"-200px",width:"200px"}} className="searchox" type="text" onChange={this.onChange} name="search" value={search}/></td> 
                <td><button className="searchbtn btn blue darken-4 " onClick={this.searchName.bind(this)}><span className="glyphicon glyphicon-search"></span></button>
                  </td>
                  <td>
                  <button onClick={this.clearName.bind(this)} className="clearbtn btn grey white-text">CLEAR</button>
                  </td>
                  </tr>
                  </table>    
                  
                  </div>
                  </div>  
               
               
               
                
                <table className="table table-striped table-hover table-condensed" ref={el =>this.el = el} >
                        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Hospital</th>
              <th>Role</th>
              <th>Action</th>
            
            </tr></thead>
            <tbody id="myTable">
            {       
                   
                   // console.log(array)
                    currentTodos.sort((a, b) => (-1* (a.name-b.name))).map(patient =>(
                       <tr key={patient.user_id}>
                        <td>{patient.user_id}</td>
                        <td>{patient.name}</td>
                        <td>{patient.birthdate}</td>
                         <td>{patient.sex}</td>
                         <td>{patient.address}</td>
                        <td>{patient.hospital }</td>
                        <td>{patient.position}</td>                            
                          <td><button className="btn btn-small blue darken-4  lighten-1 white-text">
                              {'  '}
                                  <Link to={`/admineditmedic/${patient.user_id}`}><span className="	glyphicon glyphicon-folder-open">
                                  </span></Link>
                              </button>
                              {'  '}
                          </td>  
                         </tr>

                     )
                    


                     )

                }
            
            </tbody>
          </table>
          <ul id="page-numbers" style={{float:"right"}}>
             {renderPageNumbers}
         </ul>
                   
          </div>
          
                
          </div>

         
               
            </div>
        );


    }




}
const mapStateToProps = state =>({
 medics:state.medicreducer.medics

});
export default connect(mapStateToProps,{searchMedic,logout})(AdminMedicalWorkers);
