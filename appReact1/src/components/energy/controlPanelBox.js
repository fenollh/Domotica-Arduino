import React from 'react'
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {changeLightState} from '../../bluetoothFunctions/changeLightState'


const ControlPanelBox = (props) => {

    const checkState = (status) => {
        if (status){ 
            return (
                <MaterialCommunityIcons 
                    name='lightbulb-on' 
                    size={80} 
                    color='rgb(245,245,0)' 
                    style={styles.energyStatusIcon} />
            )
        }
        else {
            return (
                <MaterialCommunityIcons 
                    name='lightbulb-off' 
                    size={80} 
                    color='rgb(0,0,0)'
                    //color='rgb(255,0,0)' 
                    style={styles.energyStatusIcon}/>
                )
            }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.inner} onPress={()=>changeLightState(props.index, props.item, props.context)}>
                <Text style={styles.boxTitle}>{props.item.name}</Text>
                {checkState(props.item.status)}
            </TouchableOpacity>
        </View>
    )
}
export default ControlPanelBox

const styles=StyleSheet.create({
    container:{
        flex:1, 
        padding: '1%',
    },

    inner:{
        flex: 1,
        padding: '3%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'rgb(220,240,255)'
    },

    boxTitle:{
        flex: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
    },  
    energyStatusIcon:{
        flex: 3,
        alignSelf: 'center',
    },
})
