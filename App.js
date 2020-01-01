import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import WeddellScreen from './screens/WeddellScreen.js'
import HarpScreen from './screens/HarpScreen.js'
import GreyScreen from './screens/GreyScreen.js'
import ImageScreen from './screens/ImageScreen.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton:{
    height:50,
    width:50,
    backgroundColor:'blue'
  }
});

const weddellStack = createStackNavigator({
  main: WeddellScreen,
  image: ImageScreen
}, {
  initialRouteName: 'main'
})

const greyStack = createStackNavigator({
  main: GreyScreen,
  image: ImageScreen
}, {
  initialRouteName: 'main'
})

const harpStack = createStackNavigator({
  main: HarpScreen,
  image: ImageScreen
}, {
  initialRouteName: 'main'
})

const TabNavigator = createBottomTabNavigator({
  Weddell: weddellStack,
  Grey: greyStack,
  Harp: harpStack
},{
  initialRouteName: 'Weddell'
})

const AppContainer = createAppContainer(TabNavigator)

class App extends React.Component {
  
  render(){
    return (
      <AppContainer />
    );
  }
}


export default App