import {GET_PATIENTS, ADD_PATIENTS, UPDATE_PATIENTS,CLEAR_PATIENTS} from "../actions/types.js"
const initialState = {

    patient:[],

    
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_PATIENTS:
            return {
                ...state,
                patient: action.payload

            };
        case ADD_PATIENTS:
            return{
                ...state,
                patient:[action.payload]
            };
        case CLEAR_PATIENTS:
            return{
                ...state,
                patient:[]
            }
            default:
                     return state

        
    }

}