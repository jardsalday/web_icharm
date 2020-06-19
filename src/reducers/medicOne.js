import {GET_SPEC_MEDICS, UPDATE_MEDICS,ADD_MEDICS,CLEAR_SPEC_MEDICS} from "../actions/types.js"
const initialState = {
    medicOne:[]
    
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_SPEC_MEDICS:
            return {
                ...state,
                medicOne:action.payload

            };
        
        case UPDATE_MEDICS:
            return{
                ...state,
                medicOne:[action.payload]
            };
        
       
            default:
                     return state
        
    }

}