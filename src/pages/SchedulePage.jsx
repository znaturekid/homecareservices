import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {Page, Toolbar, Icon, Fab} from 'react-onsenui';
import NavToolBar from '../components/NavToolBar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './styles.less';
// import './prism.less';
class SchedulePage extends React.Component {
   constructor(props) {
     super(props);
     this.handleClick = this.handleClick.bind(this);
     this.renderFixed = this.renderFixed.bind(this);
   }
   handleClick(){
     const {navigator} = this.props;
     // navigator.pushPage(({ navigator, component: AddJobView, title: 'Create Job', key: 'JOB_ADD_VIEW'}))
   }
   renderFixed() {
     const platform = true;
    return (
      <Fab
        style={{backgroundColor: platform ? '#4282cc' : null}}
        
        position='bottom right'>
        <Icon icon='md-plus' />
      </Fab>
    );
  }
  render() {
    BigCalendar.setLocalizer(
        BigCalendar.momentLocalizer(moment)
    );
    const {navigator, title, events} = this.props;
    return (
      <Page
        renderToolbar={() => <NavToolBar title={title} navigator={navigator} />}
        renderFixed={this.renderFixed}>
          <BigCalendar
                {...this.props}
                events={events}
                step={15}
                timeslots={8}
                defaultView='day'
                views={['day']}
                defaultDate={new Date()}
            />
      </Page>
    )
  }
}
const mapStateToProps = (state)=>{
    return {
        events: state.event.list
    }
}

export default connect(mapStateToProps)(SchedulePage);