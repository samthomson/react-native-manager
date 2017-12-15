import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE
} from '../actions/types'

const initialState = {
    name: '',
    phone: '',
    shift: ''
}


export default (state = initialState, action) => {
    const { payload } = action

    switch(action.type) {
        case EMPLOYEE_CREATE:
            return {
                initialState
            }
        case EMPLOYEE_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        default: 
            return state
    }
}