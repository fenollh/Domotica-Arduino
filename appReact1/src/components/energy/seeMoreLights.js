import React from 'react'
import { View, StyleSheet, Text } from 'react-native' 

import BackButton from '../global/backButton'
import EnergyControlPanel from './energyControlPanel'

export default class SeeMoreScreen extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={{flex:5}}>
                        
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