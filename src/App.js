import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCf6Rk9sqkCgvb0nBPSdIOuXj8LjCPsQXE',
      authDomain: 'auth-53c77.firebaseapp.com',
      databaseURL: 'https://auth-53c77.firebaseio.com',
      projectId: 'auth-53c77',
      storageBucket: 'auth-53c77.appspot.com',
      messagingSenderId: '526503112652'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button text='Log Out' onPress={() => firebase.auth().signOut()} />
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ height: 600, alignItems: 'center' }}>
              <Spinner size='large' />
          </View>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
