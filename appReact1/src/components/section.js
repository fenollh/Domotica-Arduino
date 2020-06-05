import React from 'react'
import { View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
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
        switch (this.state.type) {
            case 'energia':
                typeIcon=<SimpleLineIcons name='energy' size={30} color='rgb(235,235,0)' />
                break
            case 'quimica':
                typeIcon=<FontAwesome5 name='radiation' size={30} color='rgb(0,255,0)'/>
                break
            case 'mecanica':
                typeIcon=<FontAwesome5 name='warehouse' size={30} color='rgb(0,0,0)'/>
                break
        }

        return(
            <View style ={styles.container}>
                <View style={styles.header}>
                    {typeIcon}
                </View>
                <View style={styles.body}>
                    {this.state.body}
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
    },
    body: {
        flex: 3,
    },
})