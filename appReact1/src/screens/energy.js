import React from 'react'
import { View, StyleSheet, Button } from 'react-native' 
import BackButton from '../components/backButton'

export default class EnergyScreen extends React.Component {

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
        flex: 15,
    },
})