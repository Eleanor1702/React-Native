import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    //Toogle the State every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.text}>{display}</Text>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'sweetie'};
    this.userHasGivenText = this.userHasGivenText.bind(this);

  }

  userHasGivenText(t){
    this.setState ({text: t});
  }

  render() {
    return (
      <View>    //with more than one request, View is needed
        <TextInput onChangeText={this.userHasGivenText}/>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://www.anime2you.de/wordpress/wp-content/uploads/2016/12/anime.jpg'
    };
    let pic2 = {
      uri: 'https://t00.deviantart.net/YB1t9p64ZOAAGcpwZmjFR25NM3Y=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/9f64/th/pre/f/2017/031/1/9/jordan_sweeto_by_squchan-daxgdzp.jpg'
    };
    return (
      <View style={styles.container}>
        <Input/>    //default use wihtout props
        <Blink text='Picture 1' />
        <Image source ={pic} style={{width: 193, height: 110}}/>
        <Blink text='Picture 2' />
        <Image source ={pic2} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7f50',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#f0ffff',
  }
});
