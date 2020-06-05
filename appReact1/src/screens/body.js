import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Section from '../components/section'

export default class BodyScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            context: this.props.context,
        }
    }


    render(){
        return(
            <View style={{flex:10, padding: '3%'}}>
                <TouchableOpacity 
                style={styles.section} 
                activeOpacity={0.6}
                onPress={() => this.state.context.setState({pageState: 1})}>
                    <Section type='energia'/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.section} 
                activeOpacity={0.6}>
                    <Section type='quimica'/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.section} 
                activeOpacity={0.6}>
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