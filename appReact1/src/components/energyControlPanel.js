import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ControlPanelBox from './controlPanelBox'



const EnergyControlPanel = (props) => {
    let {state} = props.context

    const renderControls = () =>{
        
    }

    return(
        <View style={{flex:1}}>
            <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.name}
                data={state.favourites}
                renderItem={({item}) => (
                    <ControlPanelBox
                        name={state.lightsStatus[item].name}
                        status={state.lightsStatus[item].status}
                    />
                )}
            />
        </View>
    )
}
export default EnergyControlPanel

const styles=StyleSheet.create({
    container:{
        flex:1, 
        flexWrap: 'wrap', 
        padding:'3%',
    },
    
    box:{
        height: '33%',
        width: '50%',
        padding:'1%',

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
        alignItems: 'center',
    },
})