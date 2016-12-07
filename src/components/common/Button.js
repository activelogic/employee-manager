import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

const Button = (props) => {
  const { children, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    alignSelf: 'center',
    fontWeight: '600',
    color: '#007aff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export { Button };
