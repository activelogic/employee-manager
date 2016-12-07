import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class EmployeeListItem extends Component {
  onRowPress() {
    Actions.employeeCreate();
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.name}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  }
});

export default EmployeeListItem;
