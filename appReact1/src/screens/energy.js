import React from 'react'
import { View, StyleSheet, Button } from 'react-native' 

export default class EnergyScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            context: this.props.context
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Button 
                    title='back'
                    onPress={() => this.state.context.setState({ pageState: 0 })}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 10,
        padding: '3%',
    },
})