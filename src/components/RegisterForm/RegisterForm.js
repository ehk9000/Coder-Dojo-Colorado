import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class RegisterForm extends Component {
  state = {
    fullName: '',
    username: '',
    password: '',
    reEnteredPassword: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleRegister = (e) => {
    const { name } = e.target;
    const { username, password, fullName, reEnteredPassword } = this.state;
    const { addUser } = this.props;
    const newUser = {
      username,
      password,
      fullName
    };

    e.preventDefault();

    addUser(newUser);
  }

  render() {
    return (
      <form 
        className="register-form-style"
        onSubmit={this.handleRegister}

      >
        <h2>Create Account</h2>
        <label htmlFor="full-name-input">
          Full Name
          <input 
            id="full-name-input"
            type="text" 
            name="fullName"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="username-input">
          Username
          <input 
            id="username-input"
            type="text"
            name="username"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input 
            id="password-input"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="reentered-password">
          Re-enter Password
          <input 
            id="reentered-password"
            type="password"
            name="reEnteredPassword"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="signin-btn" name="student">I am a student over 13</button>
        <button type="submit" className="signin-btn" name="guardian">I am a guardian</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.addUser(user))
});

export default connect(null, mapDispatchToProps)(RegisterForm);

RegisterForm.propTypes = {
  addUser: PropTypes.func
};

RegisterForm.defaultProps = {
  addUser: () => {}
};
