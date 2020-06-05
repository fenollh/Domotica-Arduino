import React from 'react'
import { View, StyleSheet } from 'react-native' 

import BackButton from '../components/backButton'

export default class FisicalDevicesScreens extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.body}>
                </View>
                <BackButton context={this.props.context}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 10,
        padding: '3%',
    },
    body:{
        flex:15,
    },
})