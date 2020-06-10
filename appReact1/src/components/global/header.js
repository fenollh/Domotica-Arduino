import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends React.Component {
    
    render(){
        const {title} = this.props
        return(
            <View style ={styles.container}>
                <Text style={styles.mainTxt}> {title} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgb(120,200,255)',
        justifyContent: 'center',
    },
    mainTxt:{
        alignSelf: 'center',
        fontSize: 23,
        fontWeight: 'bold',
    },
})