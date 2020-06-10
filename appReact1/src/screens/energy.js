import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native' 

import BackButton from '../components/global/backButton'
import EnergyStateData from '../components/energy/energyStatus'
import EnergyControlPanel from '../components/energy/energyControlPanel'

export default class EnergyScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            energyStatus: 1,
            lightsOn: 0,
            lightsStatus: [
                {name: 'Living room 1', status:false},
                {name: 'Living room 2', status:false},
                {name: 'Kitchen 1', status:false},
                {name: 'Kitchen 2', status:false},
                {name: 'Entry hall 1', status:false},
                {name: 'Entry hall 2', status:false},
                {name: 'Garden', status:false},
                {name: 'Low level bathroom', status:false},
                
                {name: 'Corridor', status:false},
                {name: 'Upper level bathroom 1', status:false},
                {name: 'Upper level bathroom 2', status:false},
                {name: 'Parents bathroom', status:false},
                {name: 'Parents room', status:false},
                {name: "Hugo's room", status:false},
                {name: "Miguel's room 1", status:false},
                {name: "Miguel's room 2", status:false},
            ],
            favourites: [0,1,4,7,2,10],
        }
    }

    countLightsOn = () => {
        return(
                this.state.lightsStatus[0].status +
                this.state.lightsStatus[1].status +
                this.state.lightsStatus[2].status +
                this.state.lightsStatus[3].status +
                this.state.lightsStatus[4].status +
                this.state.lightsStatus[5].status +
                this.state.lightsStatus[6].status +
                this.state.lightsStatus[7].status +
    
                this.state.lightsStatus[8].status +
                this.state.lightsStatus[9].status +
                this.state.lightsStatus[10].status +
                this.state.lightsStatus[11].status +
                this.state.lightsStatus[12].status +
                this.state.lightsStatus[13].status +
                this.state.lightsStatus[14].status +
                this.state.lightsStatus[15].status 
        )
    }

    componentDidMount=()=>{
        this.setState({lightsOn: this.countLightsOn()})
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
                    <TouchableOpacity style = {styles.seeMore} onPress={() => this.props.context.setState({pageState: 4})}>
                        <Text style={styles.seeMoreTxt}>SEE MORE</Text>
                    </TouchableOpacity>
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