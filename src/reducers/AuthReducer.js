import { EMAIL_CHANGED } from '../actions/types'

const initialState = {
    email: ''
}


export default (state = initialState, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return 
        default: 
            return state
    }
}