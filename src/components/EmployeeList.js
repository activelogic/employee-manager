import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { initList } from '../actions/employees';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.renderEmployee = this.renderEmployee.bind(this);
  }
  componentWillMount() {
    this.props.initList();
    this.createDataSource(this.props.employees);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.employees);
  }

  createDataSource(employees) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderEmployee(employee) {
    return (
      <EmployeeListItem employee={employee} />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderEmployee}
        enableEmptySections
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return {
    employees
  };
};

export default connect(mapStateToProps, { initList })(EmployeeList);