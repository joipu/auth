import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyDEnL09shP7nqXzHsUGeCpeShtOmPnSYAw',
	    authDomain: 'authentication-e32d4.firebaseapp.com',
	    databaseURL: 'https://authentication-e32d4.firebaseio.com',
	    projectId: 'authentication-e32d4',
	    storageBucket: 'authentication-e32d4.appspot.com',
	    messagingSenderId: '704397788954',
	    appId: '1:704397788954:web:c7afcf16646a1b63'
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
    switch(this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false: 
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      	<Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;