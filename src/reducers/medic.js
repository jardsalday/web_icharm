import {GET_MEDICS,ADD_MEDICS,CLEAR_MEDICS} from "../actions/types.js"
const initialState = {
    medics:[]
    
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_MEDICS:
            return{
                ...state,
                medics:[action.payload]
            }
        case GET_MEDICS:
            return{
                ...state,
                medics:action.payload
            }
        case CLEAR_MEDICS:
            return{
                ...state,
                medics:[]
            }
       
            default:
                     return state
        
    }

}