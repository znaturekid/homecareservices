import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import LoginForm from '../components/LoginForm';
import { doLogin } from '../actions/authenticate';

class LoginPage extends React.Component {
  render() {
    return (
      <Page>
        <h1>Home Care Services</h1>
        <LoginForm submitLogin={this.props.submitLogin} />
      </Page>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (data) => dispatch(doLogin(data))
  }
}
export default connect(null, mapDispatchToProps)(LoginPage);