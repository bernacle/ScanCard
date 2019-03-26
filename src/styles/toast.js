import { StyleSheet } from 'react-native';

export const base = {
  container: {
    paddingTop: 50,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    color: 'black',
    fontWeight: 'normal',
    textAlign: 'center'
  }
};

export default {
  info: StyleSheet.create({
    container: StyleSheet.flatten([
      base.container,
      { backgroundColor: '#88f986' }
    ]),
    text: base.text
  })
};
