import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types'

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}


export default (state = initialState, action) => {
    console.log(action)
    const { payload } = action

    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: payload }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: payload
            }
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...initialState,
                user: payload,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication failed',
                loading: false
            }
        default: 
            return state
    }
}