import {combineReducers} from "redux";
import patient from './patient';
import assess from './assess';
import auth from './auth';
import patientOne from './patientOne';
import medicOne from './medicOne';
import measure from './measure';
import user from './auth';
import errors from './errors';
import medics from './medic';
import login_fail from './auth';
export default combineReducers({
    patientreducer:patient,
    auth,
    assess,
    patientOnereducer:patientOne,
    medicOnereducer:medicOne,
    measurereducer:measure,
    userreducer:user,
    errors,
    medicreducer:medics,
    login_fail

});