import axios from 'axios';
import {GET_MEDICS,GET_ERRORS,GET_USER_MEASURE,
    GET_PATIENTS,ADD_PATIENTS,UPDATE_PATIENTS,GET_SPEC_PATIENTS,
    UPDATE_MEDICS,GET_SPEC_MEDICS,ADD_MEDICS} from './types';
import {tokenConfig} from './auth';

//GET_PATIENTS
export const getPatients = ()=>(dispatch,getState)=>{
    axios.get('http://192.168.1.3:8000/api/getpatient/',tokenConfig(getState)).then(res=>{
        dispatch({type:GET_PATIENTS,payload:res.data

                });
    }).catch(err=>{console.log(err)});
}
export const searchPatient =name=>(dispatch,getState)=>{
    axios.get(`http://192.168.1.3:8000/api/searchweb/?name=${name}`,tokenConfig(getState)).then(res=>{
        console.log(res.data)
        dispatch({type:GET_PATIENTS,payload:res.data});

    }).catch(err=>{console.log(err)});
}
export const searchMedic =name=>(dispatch,getState)=>{
    axios.get(`http://192.168.1.3:8000/api/getmedic/?name=${name}`,tokenConfig(getState)).then(res=>{
        console.log(res.data)
        dispatch({type:GET_MEDICS ,payload:res.data});
    }).catch(err=>{console.log(err)});
}
export const addPatients = patrec =>(dispatch,getState)=>{
    
    axios.post('http://192.168.1.3:8000/api/registerpatient/',patrec,tokenConfig(getState) ).then(res=>{
        const array1 = [res.data]    
        //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
            age:test1.patientprofile.age,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        const oneD = test[0]
        dispatch({type:ADD_PATIENTS,payload:oneD

                });
                alert("PATIENT SAVED");
               
    }).catch(err=>{
            const errors={
                msg:err.response.data,
                status:err.response.status
            };
            dispatch({
                    type:GET_ERRORS,
                    payload:errors

            });


     });
}
export const alerto=()=>{
    alert("ASDASDASD");
}
export const addMedic = patrec =>(dispatch,getState)=>{
        
    axios.post('http://192.168.1.3:8000/api/registermedic/',patrec,tokenConfig(getState) ).then(res=>{
        const array1 = [res.data];
        console.log(array1);
        //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        const test = array1.map(function(test1){return{user_id:test1.medicprofile.user_id,name: test1.medicprofile.name,
            birthdate:test1.medicprofile.birthdate,sex:test1.medicprofile.sex,address:test1.medicprofile.address,hospital:test1.medicprofile.hospital,
            position:test1.medicprofile.position
        }});
        const oneD = test[0];
        dispatch({type:ADD_MEDICS,payload:oneD


                });
                alert("MEDIC SAVED");
               
    }).catch(err=>{
            const errors={
                msg:err.response.data,
                status:err.response.status
            };
            console.log(errors);
            dispatch({
                    type:GET_ERRORS,
                    payload:errors

            });


     });
}
export const getSpecPatient = patientID =>(dispatch,getState)=>{
    
    axios.get(`http://192.168.1.3:8000/api/getspecific/?id=${patientID}`,tokenConfig(getState) ).then(res=>{
        // const array1 = [res.data]    
        // //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        // const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
        //     birthdate:test1.patientprofile.birthdate,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        // const oneD = test[0]
        dispatch({type:GET_SPEC_PATIENTS,payload:res.data

                });
               
    }).catch(err=>{console.log(err.response.data);const error = err.response.data.username; });
}
export const updatePatients = (patrec,id) =>(dispatch,getState)=>{
    
    axios.patch(`http://192.168.1.3:8000/api/getallpatient/${id}/`,patrec,tokenConfig(getState) ).then(res=>{
        // const array1 = [res.data]    
        // //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        // const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
        //     birthdate:test1.patientprofile.birthdate,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        // const oneD = test[0]
        dispatch({type:UPDATE_PATIENTS,payload:res.data

                });
               
    }).catch(err=>{console.log(err.response.data)});
}

export const getSpecMedic = patientID =>(dispatch,getState)=>{
    
    axios.get(`http://192.168.1.3:8000/api/getmedicspecific/?id=${patientID}`,tokenConfig(getState) ).then(res=>{
        // const array1 = [res.data]    
        // //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        // const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
        //     birthdate:test1.patientprofile.birthdate,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        // const oneD = test[0]
        console.log(res.data);
        dispatch({type:GET_SPEC_MEDICS,payload:res.data

                });
               
    }).catch(err=>{console.log(err.response.data);});
}
export const updateMedics = (patrec,id) =>(dispatch,getState)=>{
    
    axios.patch(`http://192.168.1.3:8000/api/getallmedic/${id}/`,patrec,tokenConfig(getState) ).then(res=>{
        // const array1 = [res.data]    
        // //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        // const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
        //     birthdate:test1.patientprofile.birthdate,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        // const oneD = test[0]
        dispatch({type:UPDATE_MEDICS,payload:res.data

                });
               
    }).catch(err=>{console.log(err.response.data)});
}
export const getUserMeasure = () =>(dispatch,getState)=>{
    
    axios.get('http://192.168.1.3:8000/api/measureuser/',tokenConfig(getState) ).then(res=>{
        // const array1 = [res.data]    
        // //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        // const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
        //     birthdate:test1.patientprofile.birthdate,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        // const oneD = test[0]
        dispatch({type:GET_USER_MEASURE,payload:res.data

                });
               
    }).catch(err=>{console.log(err.response.data)});
}
export const updateRisk = (newRisk,id) =>(dispatch,getState)=>{
    
    axios.patch(`http://192.168.1.3:8000/api/measurement/${id}/`,newRisk,tokenConfig(getState) ).then(res=>{
        // const array1 = [res.data]    
        // //const array1 = [{username:"this.state.username",password:"this.state.password2",patientprofile:{name:"Unique",birthdate:"More"}}];
        // const test = array1.map(function(test1){return{user_id:test1.patientprofile.user_id,name: test1.patientprofile.name,
        //     birthdate:test1.patientprofile.birthdate,sex:test1.patientprofile.sex,address:test1.patientprofile.address}})
        // const oneD = test[0]
        alert("%%%%");
               
    }).catch(err=>{console.log(err.response.data)});
}