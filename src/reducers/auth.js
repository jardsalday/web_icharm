import {
    LOGIN_FAIL_RE,USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_DOCTOR,DOCTOR_LOADED, LOGIN_ADMIN,ADMIN_LOADED,LOGOUT_SUCCESS, LOGIN_FAIL
} from '../actions/types';
const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:[],
    isDoctor:null,
    isAdmin:null,
    login_fail:false

}

export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
                isDoctor:false,
                isAdmin:false,
                user:action.payload,
                login_fail:false
            }
        case ADMIN_LOADED:
            return{
                ...state,
                isAuthenticated:false,
                isLoading:false,
                isDoctor:false,
                isAdmin:true,
                login_fail:false,
                user:action.payload
            }
            case DOCTOR_LOADED:
                return{
                    ...state,
                    isAuthenticated:false,
                    isLoading:false,
                    isDoctor:true,
                    isAdmin:false,
                    login_fail:false,
                    user:action.payload
                }   
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                isDoctor:false,
                isAdmin:false
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false,
                isDoctor:false,
                isAdmin:false,
                login_fail:false

            };
        case LOGIN_DOCTOR:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,  
                isLoading:false,
                isDoctor:true,
                isAuthenticated:false,
                isAdmin:false,
                login_fail:false
    
                };
        case LOGIN_ADMIN:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isLoading:false,
                isDoctor:false,
                isAuthenticated:false,
                isAdmin:true,
                login_fail:false
            };
            
        case LOGOUT_SUCCESS:
        localStorage.removeItem('token');
            return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            isDoctor:false,
            isAdmin:false,
            isLoading: false,
            login_fail:false
         };
        case LOGIN_FAIL:
            return {
                login_fail:true
            }
        case LOGIN_FAIL_RE:
            return {
                login_fail:false
            }
        default:
            return state;

    }


}