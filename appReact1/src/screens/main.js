import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/global/header'
import EnergyScreen from './energy'
import BodyScreen from './body';
import GasScreen from './gas';
import FisicalDevicesScreen from './fisicalDevices';
import SeeMoreScreen from '../components/energy/seeMoreLights'

export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
        pageState: 0,
    }
  }
  render(){
    let page, title
    switch (this.state.pageState){
        case 0:
            page=<BodyScreen context={this}/>
            title='DOMOTICS'
            break;
        case 1:
            page=<EnergyScreen context={this}/>
            title='ENERGY MANAGEMENT'
            break;
        case 2:
            page=<GasScreen context={this}/>
            title='GAS ANALYSIS'
            break;
        case 3: 
            page=<FisicalDevicesScreen context={this}/>
            title='FISICAL DEVICES MANAGEMENT'
            break;
        case 4:
          page=<SeeMoreScreen context={this}/>
          title='ENERGY MANAGEMENT'
          break;
    }

    return (
        <View style={styles.container}>
          <Header title={title}/>
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