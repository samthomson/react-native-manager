import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { containerStyle, textStyle, cardSectionStyle } = styles

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPressEvent={onAccept}>Yes</Button>
                    <Button onPressEvent={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        lineHeight: 40,
        textAlign: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        flex: 1,
        justifyContent: 'center',
        position: 'relative'
    }
}

export { Confirm }