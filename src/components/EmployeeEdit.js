import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { Card, CardSection, Button, Confirm } from './common'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {

    state = { showModal: false }

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

    onConfirmDeleteEmployee() {
        const { uid } = this.props.employee

        this.props.employeeDelete({ uid })
        this.setState({ showModal: false })
    }

    onCancelDeleteEmployee() {
        this.setState({ showModal: false })
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

                <CardSection>
                    <Button
                        onPressEvent={() => this.setState({ showModal: !this.state.showModal})}
                    >
                        Retire employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onConfirmDeleteEmployee.bind(this)}
                    onDecline={this.onCancelDeleteEmployee.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
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
        employeeSave,
        employeeDelete
    }
)(EmployeeEdit)