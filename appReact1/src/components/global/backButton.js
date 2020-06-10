import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const BackButton = (props) => {
    return(
        <View style={{flex:1}}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => props.context.setState({ pageState: 0 })}>
                    <Text style={styles.buttonTxt}>BACK</Text>
            </TouchableOpacity>
        </View>
    )
}
export default BackButton

const styles= StyleSheet.create({
    button:{
        backgroundColor: 'rgb(100,150,255)', 
        flex:1, 
        borderRadius:20, 
        width:'80%', 
        alignSelf:'center', 
        justifyContent:'center'
    },
    buttonTxt:{
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})