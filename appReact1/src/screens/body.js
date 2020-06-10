import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Section from '../components/global/section'

export default class BodyScreen extends React.Component{

    render(){
        const {context} = this.props
        return(
            <View style={{flex:10, padding: '3%'}}>
                <TouchableOpacity 
                style={styles.section} 
                activeOpacity={0.6}
                onPress={() => context.setState({pageState: 1})}>
                    <Section type='energia'/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.section} 
                activeOpacity={0.6}
                onPress={() => context.setState({pageState: 2})}>
                    <Section type='quimica'/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.section} 
                activeOpacity={0.6}
                onPress={() => context.setState({pageState: 3})}>
                    <Section type='mecanica'/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    section:{
        flex:1,
        marginVertical: '3%',
    },
})