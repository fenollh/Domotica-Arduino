import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const EnergyStateData = (props) => {
   
    let statusIcon
    props.state.energyStatus
    ? statusIcon= <MaterialCommunityIcons name='lan-connect' size={50} color='rgb(0,200,0)' style={styles.energyStatusIcon}/>
    : statusIcon= <MaterialCommunityIcons name='lan-disconnect' size={50} color='red' style={styles.energyStatusIcon}/>
   
   return(
   <View style={{flex:1}}>
        <View style={{flex:1, flexDirection:'row'}}>
            <Ionicons name='ios-flash' size={50} color='rgb(245,245,0)' style={styles.energyStatusIcon}/>
            <View style={[{flex:10}, styles.subtitAlign]}>
                <Text style={styles.Txt}> ENERGY SUPPLY STATUS </Text>
            </View>
            {statusIcon}
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
            <MaterialCommunityIcons name='lightbulb-on' size={40} color='rgb(245,245,0)' style={styles.energyStatusIcon}/>
            <View style={[{flex:10}, styles.subtitAlign]}>
                <Text style={styles.Txt}> LIGHTS ON </Text>
            </View>
            <View style={[{flex: 2}, styles.subtitAlign]}>
                <Text style={styles.Txt}>{props.state.lightsOn}/16</Text>
            </View>
        </View>
    </View>
   )
}
export default EnergyStateData

const styles= StyleSheet.create({
    energyStatusIcon:{
        flex:2,
        alignSelf: 'center',
    },
    Txt:{
        fontWeight:'bold', 
        fontSize:16,
    },
    subtitAlign:{
        alignSelf: 'center',
        alignItems: 'flex-start',
    }
})