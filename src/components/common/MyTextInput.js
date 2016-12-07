import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';


const MyTextInput = ({ label, value, onChangeText, autoCorrect, autoCapitalize,
  secureTextEntry, placeHolder }) => (
    <View style={styles.container}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        placeholder={placeHolder}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </View>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInput: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  }
});

export { MyTextInput };
