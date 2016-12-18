import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Toolbar, Icon, Fab} from 'react-onsenui';
import NavToolBar from '../components/NavToolBar';
import JobList from '../containers/JobList';
import AddJobView from '../containers/AddJobView';
export default class JobPage extends React.Component {
   constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.renderFixed = this.renderFixed.bind(this);
   }
   handleClick(){
     const {navigator} = this.props;
     navigator.pushPage(({ navigator, component: AddJobView, title: 'Create Job', key: 'JOB_ADD_VIEW'}))
   }
   renderFixed() {
     const platform = true;
    return (
      <Fab
        style={{backgroundColor: platform ? '#4282cc' : null}}
        onClick={this.handleClick}
        position='bottom right'>
        <Icon icon='md-plus' />
      </Fab>
    );
  }
  render() {
    const {navigator, title} = this.props;
    return (
      <Page
        renderToolbar={() => <NavToolBar title={title} navigator={navigator} />}
        renderFixed={this.renderFixed}>
        <JobList navigator={navigator}/>
      </Page>
    )
  }
}