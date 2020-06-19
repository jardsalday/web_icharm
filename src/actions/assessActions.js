import axios from 'axios';
import {GET_PATIENTS, ADD_PATIENTS,GET_PATIENT} from './types';
import {tokenConfig} from './auth';

export const getSpecPatient = ID=>(dispatch,getState)=>{
    axios.get(`http://192.168.1.3:8000/api/assess/?patient_number=${ID}`,tokenConfig(getState)).then(res=>{
        dispatch({type:GET_PATIENT,payload:res.data

        });
}).catch(err=>{console.log(err)});
}