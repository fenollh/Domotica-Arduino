import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/header'
import EnergyScreen from '../screens/energy'
import BodyScreen from './body';

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
        pageState: 0,
    }
  }
  render(){
    let page
    switch (this.state.pageState){
        case 0:
            page=<BodyScreen context={this}/>
            break;
        case 1:
            page=<EnergyScreen context={this}/>
    }

    return (
        <View style={styles.container}>
          <Header/>
          {page}
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