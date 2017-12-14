import {
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
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'entered name' }
            return { ...state, [action.payload.prop]: action.payload.value}
        default: 
            return state
    }
}