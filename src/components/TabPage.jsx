import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import NavToolBar from './NavToolBar';
export default class JobPage extends React.Component {
  render() {
    const {navigator, title, children, backButton} = this.props;
    return (
      <Page
        renderToolbar={() => <NavToolBar title={title} navigator={navigator} backButton={backButton} />}>
        {children}
      </Page>
    )
  }
}