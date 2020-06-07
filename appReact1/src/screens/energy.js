import React from 'react'
import { View, StyleSheet, Text } from 'react-native' 

import BackButton from '../components/backButton'
import EnergyStateData from '../components/energyStatus'
import EnergyControlPanel from '../components/energyControlPanel'

export default class EnergyScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            energyStatus: 1,
            lightsOn: 0,
            lightsStatus: [
                {name: 'Living room 1', status:0},
                {name: 'Living room 2', status:0},
                {name: 'Kitchen 1', status:0},
                {name: 'Kitchen 2', status:0},
                {name: 'Entry hall 1', status:0},
                {name: 'Entry hall 2', status:0},
                {name: 'Garden', status:0},
                {name: 'Low level bathroom', status:0},
                
                {name: 'Corridor', status:0},
                {name: 'Upper level bathroom 1', status:0},
                {name: 'Upper level bathroom 2', status:0},
                {name: 'Parents bathroom', status:0},
                {name: 'Parents room', status:0},
                {name: "Hugo's room", status:0},
                {name: "Miguel's room 1", status:0},
                {name: "Miguel's room 2", status:0},
            ],
            favourites: [0,1,4,7,2,10],
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={{flex:2}}>
                        <EnergyStateData state={this.state}/>
                    </View>

                    <View style={{flex:5}}>
                        <EnergyControlPanel context={this}/>
                    </View> 
                    <View style = {styles.seeMore}>
                        <Text style={styles.seeMoreTxt}>SEE MORE</Text>
                    </View>
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
    },
    seeMore:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    seeMoreTxt:{
        fontSize: 15,
        fontWeight: 'bold',
    },
})