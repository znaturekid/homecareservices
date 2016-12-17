import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import NavToolBar from '../Components/NavToolBar';
export default class InvoicePage extends React.Component {
  render() {
    const {navigator, title}= this.props;
    return (
      <Page
        renderToolbar={() => <NavToolBar title={title} navigator={navigator} />}>
        <div>
          Invoice
        </div>
      </Page>
    );
  }
}