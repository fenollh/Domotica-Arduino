import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from './src/components/header'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <Header/>
          <View style={{flex: 7}}>
            <Text>My APP</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgb(200,230,255)',
  }
});