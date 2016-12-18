import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {Page, Toolbar, Icon} from 'react-onsenui';
import LoginForm from '../components/LoginForm';
import { doLogin } from '../actions/authenticate';

class LoginPage extends React.Component {
  render() {
    return (
      <Page>
        <p style={{textAlign: 'center', marginTop:'5vH'}}><Icon icon='md-apple' style={{fontSize:'120px' , color:'#4282cc', textAlign:'center'}} /></p>
        <h1 style={{color:'#4282cc', textAlign:'center', marginTop:'3vH'}}>Home Care Services</h1>
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