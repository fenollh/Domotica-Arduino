import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Section extends React.Component {
    constructor(props){
        super(props)
        this.state={
            type: this.props.type,
            name: 'hola',
        }
    }

    render(){
        let typeIcon
        let title
        switch (this.state.type) {
            case 'energia':
                typeIcon=<Ionicons name='ios-flash' size={40} color='rgb(245,245,0)' style={styles.icon}/>
                title='ENERGY MANAGEMENT' 
                break
            case 'quimica':
                typeIcon=<FontAwesome5 name='radiation' size={30} color='rgb(0,255,0)' style={styles.icon}/>
                title='GAS ANALYSIS'
                break
            case 'mecanica':
                typeIcon=<FontAwesome5 name='warehouse' size={30} color='rgb(0,0,0)' style={styles.icon}/>
                title='FISICAL DEVICES MANAGEMENT'
                break
        }

        return(
            <View style ={styles.container}>
                <View style={styles.header}>
                    {typeIcon}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.body}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: '3%',
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
    },
    header:{
        flex:1,
        flexDirection: 'row',
    },
    body: {
        flex: 3,
    },
    icon:{
        marginEnd: '5%'
    },
    title:{
        marginTop: '2%',
        fontSize: 15,
        fontWeight: 'bold',
    },
})