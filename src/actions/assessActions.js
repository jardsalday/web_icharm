import axios from 'axios';
import {GET_PATIENTS, ADD_PATIENTS,GET_PATIENT} from './types';
import {tokenConfig} from './auth';

export const getSpecPatient = ID=>(dispatch,getState)=>{
    axios.get(`https://icharmapi.herokuapp.com/api/assess/?patient_number=${ID}`,tokenConfig(getState)).then(res=>{
        dispatch({type:GET_PATIENT,payload:res.data

        });
}).catch(err=>{console.log(err)});
}