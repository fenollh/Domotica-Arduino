import React from 'react'
import { View, StyleSheet, Button } from 'react-native' 
import BackButton from '../components/backButton'

export default class GasScreen extends React.Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.body}>
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
})