import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PatientComponent from './components/PatientComponent';
import {Provider} from 'react-redux';
import store from './store';
import EditPatient from './components/EditPatient';
import Home from './components/Home';
import ViewPatient from './components/ViewPatient';
import Login from './components/Login';
import PrivateRoute from './components/common/PrivateRoute';
import MedicRoute from './components/common/MedicRoute';
import AdminRoute from './components/common/AdminRoute';
import {loadUser} from './actions/auth';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Testing from './components/Testing';
import MeasureAdd from './components/MeasureAdd';
import { Admin } from './components/Admin';
import PatientEdit from './components/PatientEdit';
import { PseudoEdit } from './components/PseudoEdit';
import AdminPatients from './components/AdminPatients';
import AdminMedicalWorkers from './components/AdminMedicalWorkers';
import AdminEditPatient from './components/AdminEditPatient';
import AdminEditMedic from './components/AdminEditMedic';
import UserPatient from './components/UserPatient';
import Measures from './components/Measures';
import ListUserMeasure from './components/ListUserMeasure';
import UserProfile from './components/UserProfile';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './components/Alerts';
import AdminProfile from './components/AdminProfile';
import  DoctorProfile from './components/DoctorProfile';
import ListEditPatient from './components/ListEditPatient';
import PatientEditAdmin from './components/PatientEditAdmin';
import AdminHome from './components/AdminHome';

const alertOptions = {
  timeout:3000,
  position:'top center'
}

export class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());

  } 
  render(){
  return (
   <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
   
  <Router>
   <div className ="Main_Content">
   <Switch>
   
   <Route path="/" exact component={Home}/>
   <Route path="/login" exact component={Login}/>{/**/}
   <Route path="/contactus" exact component={ContactUs}/>{/**/}
   <Route path="/aboutus" exact component={AboutUs}/>{/**/}
   <Route path="/product" exact component={Product}/>{/**/}


   {/*Medic Pages*/}
   <Route path="/patient" exact component={PatientComponent}/>
   <Route path="/viewdetails/:patientID" component={EditPatient}/>
   <Route path = "/admin" component={Admin}/>
   <Route path = "/patientedit/:patientID" component={PatientEdit}/>
   <Route path = "/patientedit" component={PatientEdit}/>
   <Route path="/medicprofile" component={DoctorProfile}/>
   <Route path='/listeditpatient/:patientID' component = {ListEditPatient}/>
  {/* // Admin Pages */}
  <Route path = '/adminmedics' component = {AdminMedicalWorkers}/>{/**Admin */}
   <Route path = '/adminpatients' component = {AdminPatients}/>{/**Admin */}
   <Route path =  '/patienteditadmin' component = {PatientEditAdmin}/>
   <Route path = '/admineditmedic/:patientID' component = {AdminEditMedic}/>{/**Admin */}
   <Route path = '/admineditpatient/:patientID' component = {AdminEditPatient}/>{/**Admin */}
   <Route path = '/adminprofile' component={AdminProfile}/>
   <Route path='/adminhome' component={AdminHome}/>
  {/* // PatientRoute */}
   <PrivateRoute path="/viewpatient" component={ViewPatient}/>
   <PrivateRoute path = "/addmeasure" component = {MeasureAdd}/>
   <PrivateRoute path = '/pseudo' component = {PseudoEdit}/>
   <PrivateRoute path ='/userpatient' component={UserPatient}/>
   <PrivateRoute path = '/usermeasures' component={Measures}/>
   <PrivateRoute path='/listusermeasure' component={ListUserMeasure}/>
   <PrivateRoute path='/userprofile' component={UserProfile}/>
  
    </Switch>
    </div>

  </Router>

  </AlertProvider>
  </Provider>
  );
}}

export default App;