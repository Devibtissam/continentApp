import {
    FETCH_CONTINENTS,
    FETCH_SUCCES,
    FETCH_FAILED,
    UPDATE_COUNTRY,
    ADD_COUNTRY
} from './continentTypes'
const initialState = {
    loading: false,
    data: [],
    error : ''
}


const continentReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_CONTINENTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCES: 
        return {
            ...state,
            loading: false,
            data: action.payload
        }
        case FETCH_FAILED: 
        return {
            ...state,
            loading:false,
            error: action.payload
        }
        default:
            return state

    }
}

export default continentReducer