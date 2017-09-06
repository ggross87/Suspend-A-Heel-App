/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

// Importing scenes for our app
import Home from './Home';
import Shop from './Shop';
import Showroom from './Showroom';
import About from './About';
import Contact from './Contact';
import Facts from './Facts';
import Login from './src/pages/Login';

class suspendaheelapp extends Component {

  // // Our renderScene function will choose which scene to render based on the route id
  // renderScene(route, navigator) {
  //   if (route.id === 1) {
  //     return <Home navigator={navigator} />
  //   }
  //   else if (route.id === 2) {
  //     return <Shop navigator={navigator} />
  //   }
  //   else if (route.id === 3) {
  //     return <Showroom navigator={navigator} />
  //   }
  //   else if (route.id === 4) {
  //     return <Facts navigator={navigator} />
  //   }
  //   else if (route.id === 5) {
  //     return <Contacts navigator={navigator} />
  //   }
  //   else if (route.id === 6) {
  //     return <About navigator={navigator} />
  //   }
  //
  // }
  //
  // // The configureScene function allows us to change the animation properties of a scene
  // configureScene() {
  //   return Navigator.SceneConfigs.FloatFromBottom;
  // }

  render() {
    return (
      <Login />
      // // Our Navigator handles the transition between different scenes in our app
      // <Navigator
      //   // The first page we are going to render
      //   initialRoute={{ id: 1 }}
      //   // Passing in our renderScene function
      //   renderScene={this.renderScene}
      //   // Passing in our configureScene function
      //   configureScene={this.configureScene}
      // />
    );
  }

}

AppRegistry.registerComponent('suspendaheelapp', () => suspendaheelapp);
