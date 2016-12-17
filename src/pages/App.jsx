import React from 'react';
import ReactDOM from 'react-dom';
import { Tabbar, Tab, Navigator } from 'react-onsenui';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import TabBars from '../components/TabBars';

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;
    return (<route.component {...props} />);
  }

  render() {
    const { authenticated } = this.props;
    let main = null;
    if (authenticated) {
      main = (<LoginPage />);
    } else {
      main = (<Navigator
        initialRoute={{ component: TabBars, props: { key: 'main' } }}
        renderPage={this.renderPage}
        />);
    }
    return (<div>{main}</div>);

  }

}
const mapStateToProp = (state) => {
  return {
    authenticated: state.app.authenticated
  }
};
export default connect(mapStateToProp)(App);
