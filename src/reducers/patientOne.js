import {GET_SPEC_PATIENTS, UPDATE_PATIENTS,CLEAR_SPEC_PATIENTS} from "../actions/types.js"
const initialState = {
    patientOne:[]
    
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_SPEC_PATIENTS:
            return {
                ...state,
                patientOne: action.payload

            };
        
        case UPDATE_PATIENTS:
            return{
                ...state,
                patientOne:[action.payload]
            };
        case CLEAR_SPEC_PATIENTS:
            return {
                ...state,
                patientONE:null
            }
       
            default:
                     return state
        
    }

}