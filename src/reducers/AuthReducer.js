import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
} from '../actions/types'

const initialState = {
    email: '',
    password: ''
}


export default (state = initialState, action) => {
    console.log(action)
    const { payload } = this.action

    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: payload }
        case PASSWORD_CHANGED:
            return { ...state, password: payload }
        case LOGIN_USER_SUCCESS:
            return { ...state, user: payload }
        default: 
            return state
    }
}