import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

export default class SaveCard extends Component {
  componentWillMount() {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }

  scanCard() {
    console.log('aki');
    CardIOModule.scanCard()
      .then(data => {
        let card = {};
        card.number = data.cardNumber;
        card.exp_month = data.expiryMonth;
        card.exp_year = data.expiryYear;
        card.cvv = data.cvv;
      })
      .catch(() => {
        // the user cancelled
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={
            Platform.OS === 'ios'
              ? styles.iosSubmitBtn
              : styles.androidSubmitBtn
          }
          onPress={() => this.scanCard.bind(this)}
        >
          <Text style={styles.submitBtnText}>Scan Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  iosSubmitBtn: {
    width: 300,
    backgroundColor: '#4286f4',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  },
  androidSubmitBtn: {
    width: 300,
    backgroundColor: '#4286f4',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  }
});
