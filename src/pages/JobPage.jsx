import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar} from 'react-onsenui';
import NavToolBar from '../components/NavToolBar';
import JobList from '../containers/JobList';
export default class JobPage extends React.Component {
  render() {
    const {navigator, title} = this.props;
    return (
      <Page
        renderToolbar={() => <NavToolBar title={title} navigator={navigator} />}>
        <JobList navigator={navigator}/>
      </Page>
    )
  }
}