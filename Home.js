import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableHighlight, Image, StyleSheet, Keyboard, Dimensions, Platform,  TextInput, TouchableOpacity, Container, Navbar } from 'react-native';
import suspendaheelimg from './Suspend-A-Heel-Strap.png';

export default class Home extends Component {

  // The press function takes in an argument (movie name) and pushes to the navigator the individual movie page
  // It also passes along the name of the movie which will be used fetch information from the OMDB API

  // We make a constructor to initialize our states.
  constructor() {
    super();
    this.state = {
      message: '',
      revealed: false,
      inputText: ''
    };
  }

  // This will set our message to the input text
  // and then change input text to a blank string.
  setMessage() {
    this.setState({
      message: this.state.inputText,
      inputText: ''
    });
  }

  // This will toggle the display of our message box.
  toggleDisplay() {
    this.setState({
      // The bang returns the negative of revealed.
      // So if revealed is true, it becomes false,
      // and if it's false, it becomes true.
      revealed: !this.state.revealed
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>

        <Image source={suspendaheelimg} style={styles.icon} />
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Enter Text Here'
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => this.setState({ inputText: text })}
          value={this.state.inputText}
        />

        {/* The setter button recieves the setMessage function.
          * Notice how we need to bind 'this', so that the render function
          * can access the state of its component.
          */}
        <TouchableOpacity style={styles.setter} onPress={this.setMessage.bind(this)}>
          <Text style={styles.setterText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer} />
      </View>
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    height: 60,
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    color: 'white',
    margin: 10,
    height: 45,
    paddingLeft: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    fontSize: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  // Our input container
  inputContainer: {
    flex: 4,
    margin: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323a33'
  },

  // Our textInput
  textInput: {
    marginLeft:10,
    marginRight:10,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2'
  },

  // Our setter button
  setter: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0e68c',
    borderRadius: 5
  },

  // The text of our setter button
  setterText:{
    fontSize: 16,
    color: 'white'
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: screenWidth,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  icon: {
    width: 350,
    height: 67
  }
});
