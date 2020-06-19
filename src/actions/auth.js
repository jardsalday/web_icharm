import axios from 'axios';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_DOCTOR,
    DOCTOR_LOADED,
    LOGIN_ADMIN,
    ADMIN_LOADED,
    LOGOUT_SUCCESS,
    LOGIN_FAIL,
    LOGIN_FAIL_RE,
    CLEAR_SPEC_MEDICS,
    CLEAR_MEDICS,
    CLEAR_PATIENTS,
    CLEAR_SPEC_PATIENTS
} from './types';

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch( { type: USER_LOADING } );

    //Get token from state
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //If token, add to headers config
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('http://192.168.1.3:8000/api/auth/user', config)
        .then(res => {
            console.log(res.data.is_staff)
            if(res.data.is_staff){
                console.log("DOCTOR")
                dispatch({
                    type:DOCTOR_LOADED,
                    payload:res.data
                });
            }
            else if(res.data.is_superuser){
                console.log("ADMIN")
                dispatch({
                    type:ADMIN_LOADED,
                    payload:res.data
                })
            }
            else {
                console.log("PATIENT")
       
            dispatch({
                type:USER_LOADED,
                payload: res.data
            });
        
        }
        }).catch(err=>{console.log(err)});
}

//CHECK TOKEN & LOAD USER
export const login = (username,password) =>dispatch => {
    dispatch({type:LOGIN_FAIL_RE,
              payload:false
    });
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //If token, add to headers config

    const body = JSON.stringify({username,password})
    axios.post('http://192.168.1.3:8000/api/auth/login',body, config)
        .then(res => {
            if(res.data.user.is_staff){
                console.log("DOCTOR")
                dispatch({
                    type:LOGIN_DOCTOR,
                    payload:res.data
                });
               
            }
            else if(res.data.user.is_superuser){
               console.log("ADMIN")
               dispatch({
                    type:LOGIN_ADMIN,
                    payload:res.data

               })
            }
            else {
                console.log("PATIENT")
            dispatch({
                type:LOGIN_SUCCESS,
                payload: res.data
            });
        }

        }).catch(err=>{
                 const errors={
                     msg:err.response.data,
                     status:err.response.status
                 }
                 console.log(errors);
                 dispatch({
                    type:LOGIN_FAIL,
                    payload:errors

            });
        });
}

export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    // If token, add to headers config
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
  
    return config;
  };

  export const logout = () => (dispatch, getState) => {
    axios
      .post('http://192.168.1.3:8000/api/auth/logout/', null, tokenConfig(getState))
      .then((res) => {
        dispatch({ type: 'CLEAR_LEADS' });
        
        dispatch({type: CLEAR_SPEC_MEDICS});
       
        dispatch({type:CLEAR_MEDICS});
       
        dispatch({type:CLEAR_PATIENTS});
       
        dispatch({type:CLEAR_SPEC_PATIENTS});
       
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
            console.log(err);
      });
  };