import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, MyTextInput, Button } from './common';
import { updateEmployeeForm, createEmployee } from '../actions/activeEmployee';

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onShiftChange = this.onShiftChange.bind(this);
    this.onCreateEmployee = this.onCreateEmployee.bind(this);
  }

  onNameChange(value) {
    this.props.updateEmployeeForm({ prop: 'name', value });
  }

  onPhoneChange(value) {
    this.props.updateEmployeeForm({ prop: 'phone', value });
  }

  onShiftChange(value) {
    this.props.updateEmployeeForm({ prop: 'shift', value });
  }

  onCreateEmployee() {
    const { name, phone, shift } = this.props;
    this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
  }

  createDayPickerOptions() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map((day) => {
      return (
        <Picker.Item key={day} label={day} value={day} />
      );
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <MyTextInput
            value={this.props.name}
            label="Name"
            placeHolder="John Doe"
            onChangeText={this.onNameChange}
            autoCapitalize="none"
          />
        </CardSection>

        <CardSection>
          <MyTextInput
            value={this.props.phone}
            label="Phone"
            placeHolder="555-555-5555"
            onChangeText={this.onPhoneChange}
            autoCapitalize="none"
          />
        </CardSection>

        <CardSection style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.props.shift}
            onValueChange={this.onShiftChange}
          >
            {this.createDayPickerOptions()}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCreateEmployee}>
            Create Employee
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
  },
  pickerLabel: {
    fontSize: 19,
    paddingLeft: 20,
  },
  picker: {
    flex: 1
  }
});


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.activeEmployee;

  return {
    name, phone, shift
  };
};

const actions = {
  updateEmployeeForm,
  createEmployee
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
