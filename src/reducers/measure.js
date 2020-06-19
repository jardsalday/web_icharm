import {GET_USER_MEASURE} from "../actions/types.js"
const initialState = {

    measure:[]

    
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_USER_MEASURE:
            return {
                ...state,
                measure: action.payload

            };
       
            default:
                     return state
        
    }

}