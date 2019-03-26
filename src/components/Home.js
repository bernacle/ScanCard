import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Clipboard
} from 'react-native';
import { background } from '../styles/colors';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';
import Toast from '../styles/toast';
import Toaster from 'react-native-toaster';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
  }

  static navigationOptions = {
    title: 'Scan Card',
    headerTintColor: '#88f986',
    headerStyle: {
      backgroundColor: 'black'
    }
  };

  componentWillMount() {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }

  copyClipboard(cardNumber) {
    Clipboard.setString(cardNumber);
    const message = {};
    message.text = 'Copied to clipboard';
    message.styles = Toast.info;
    this.setState({ message });
  }

  scanCard() {
    console.log('aki');
    CardIOModule.scanCard()
      .then(data => {
        this.copyClipboard(data.cardNumber);
      })
      .catch(() => {
        // the user cancelled
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Toaster message={this.state.message} />
        <TouchableOpacity
          style={
            Platform.OS === 'ios'
              ? styles.iosSubmitBtn
              : styles.androidSubmitBtn
          }
          onPress={this.scanCard.bind(this)}
        >
          <Text style={styles.submitBtnText}>Scan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  iosSubmitBtn: {
    backgroundColor: '#88f986',
    padding: 10,
    borderRadius: 5,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center'
  }
});
