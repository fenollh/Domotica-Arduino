import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return(
        <View style ={styles.container}>
            <Text style={styles.mainTxt}> DOMÓTICA </Text>
        </View>
    )
}; export default Header

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