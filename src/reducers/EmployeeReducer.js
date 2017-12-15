import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log('payload', action.payload)
            return action.payload
        default:
            return state
    }
}