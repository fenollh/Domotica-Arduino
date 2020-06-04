import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-vector-icons'

export default class Section extends React.Component {
    constructor(props){
        super(props)
        this.state={
            type:this.props.type,
        }
    }

    render(){
        console.log(typeof this.state.type)
        console.log(this.state.type)
/*
        let typeIcon
        switch (this.state.type) {
            case 'energia':
                typeIcon=<SimpleLineIcons name='energy'/>
                break
            case 'quimica':
                typeIcon=<FontAwesome5 name='radiation'/>
                break
            case 'mecanica':
                typeIcon=<FontAwesome5 name='warehouse'/>
                break
        }
        */

        return(
            <View style ={styles.container}>
                <View style={styles.header}>
                    <Icon name='sc-telegram' color='green'/>
                </View>
                <View style={styles.body}></View>
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