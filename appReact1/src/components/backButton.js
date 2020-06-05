import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

const BackButton = (props) => {
    return(
        <View style={{flex:1}}>
            <Button 
                style={{backgroundColor: 'white'}}
                title='back'
                onPress={() => props.context.setState({ pageState: 0 })}/>
        </View>
    )
}
export default BackButton