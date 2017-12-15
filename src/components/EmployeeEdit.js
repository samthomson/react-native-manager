import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { Card, CardSection, Button } from './common'
import { employeeUpdate, employeeSave } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }
    
    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress() {
        const { name, phone, shift } = this.props

        const message = `Hi ${name}, your upcoming shift is on ${shift}`
        Communications.text(phone, message)
    }

    render() {
        
        return (
            <Card>
                <EmployeeForm {...this.props} />
            
                <CardSection>
                    <Button
                        onPressEvent={this.onButtonPress.bind(this)}
                    >
                        Save
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                        onPressEvent={this.onTextPress.bind(this)}
                    >
                        Text schedule
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm

    return { 
        name,
        phone,
        shift
    }
}

export default connect(
    mapStateToProps,
    {
        employeeUpdate,
        employeeSave
    }
)(EmployeeEdit)