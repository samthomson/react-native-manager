import React from 'react'
import {
    Actions,
    Scene,
    Router,
    Stack
} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" modal hideNavBar>
                <Scene key="auth" initial title="Please Login" >
                    <Scene key="login" component={LoginForm} />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent