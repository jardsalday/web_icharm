import {GET_PATIENTS, ADD_PATIENTS, GET_PATIENT} from "../actions/types.js"
const initialState = {

    assess:[]
    
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_PATIENT:
            return {
                ...state,
                assess: action.payload

            };
            default:
                     return state
        
    }

}