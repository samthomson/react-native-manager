import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyAKq8el0d8pK9k9_30MzRMN1NeCZSmY7IU",
            authDomain: "manager-a1b53.firebaseapp.com",
            databaseURL: "https://manager-a1b53.firebaseio.com",
            projectId: "manager-a1b53",
            storageBucket: "",
            messagingSenderId: "80321389469"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk)
        )

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App