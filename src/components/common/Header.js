import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.heading}>{props.headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  },
  heading: {
    fontSize: 20
  }
});

export { Header };
