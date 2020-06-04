import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from './src/components/header'
import Section from './src/components/section'

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <Header/>
          <View style={styles.body}>
            <View style={styles.section}>
              <Section type='energia'/>
            </View>
            <View style={styles.section}>
              <Section type='quimica'/>
            </View>
            <View style={styles.section}>
              <Section type='mecanica'/>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgb(200,230,255)',
  },
  body: {
    flex:10,
    padding: '3%',
  },
  section:{
    flex:1,
    marginVertical: '3%',

  }
});