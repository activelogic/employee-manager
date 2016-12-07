import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet
} from 'react-native';

import { Card, CardSection, MyTextInput, Button, Spinner } from './common';
import { changeEmail, changePassword, login } from '../actions/auth';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  onEmailChange(text) {
    this.props.changeEmail(text);
  }

  onPasswordChange(text) {
    this.props.changePassword(text);
  }

  onLogin() {
    const { email, password } = this.props;
    this.props.login({ email, password });
  }

  renderButton() {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.onLogin}>Login Now</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <MyTextInput
            value={this.props.email}
            label="Email"
            placeHolder="email@gmail.com"
            onChangeText={this.onEmailChange}
            autoCapitalize="none"
          />
        </CardSection>
        <CardSection>
          <MyTextInput
            value={this.props.password}
            label="Password"
            placeHolder="password"
            autoCapitalize="none"
            onChangeText={this.onPasswordChange}
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorMessage}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, isLoading } = auth;
  return { email, password, error, isLoading };
};

export default connect(
  mapStateToProps, { changeEmail, changePassword, login })(LoginForm);
