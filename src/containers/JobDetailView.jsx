import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Row, Button } from 'react-onsenui';
import TabPage from '../components/TabPage';
import Map from '../components/Map';
import JobStatus from '../components/JobStatus';
import { updatejob } from '../actions/job';
import moment from 'moment';
import HistoryLog from './HistoryLog';
import AppointmentList from './AppointmentList';
import TicketItems from './TicketItems';
class JobDetailView extends Component {
    constructor(props) {
        super(props);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.gotoTicketLog = this.gotoTicketLog.bind(this);
        this.gotoAppointment = this.gotoAppointment.bind(this);
        this.gotoTicketItem = this.gotoTicketItem.bind(this);
    }
    onChangeStatus(value) {
        this.props.detail.TicketStatus = value;
        this.props.updateJob(this.props.detail);
    }
    gotoTicketLog(){
        const {navigator} = this.props;
        const {TicketLogs} = this.props.detail;
        navigator.pushPage({ navigator, component: HistoryLog, title: '', key: 'JOB_LOG_VIEW' });
    }
    gotoAppointment(){
        const {navigator} = this.props;
        navigator.pushPage({ navigator, component: AppointmentList, title: '', key: 'JOB_APPONTMENT_VIEW'});
    }
    gotoTicketItem(){
        const {navigator} = this.props;
        navigator.pushPage({ navigator, component: TicketItems, title: '', key: 'JOB_TICKETITEM_VIEW'});
    }
    render() {
        const { Title, Customer, TicketStatus, Appointments, TicketItems, TicketLogs} = this.props.detail;
        let item = 'Items';
        if (TicketItems.length) {
            item = TicketItems.map(function (x) {
                return x.Item.ItemName;
            }).join(', ');
        }
        let apt = (<p className="primary">Schedule Appointment</p>);
        if (Appointments.length) {
            apt = (
                <div>
                    <p className="primary"> {moment(Appointments[0].StartDate).format('MM-DD-YYYY')}</p>
                    <br />
                    <span className="secondary">{moment(Appointments[0].StartDate).format('HH:mm a')} - {moment(Appointments[0].EndTime).format('HH:mm a')}</span>
                </div>
            );
        }
        let log;
        if (TicketLogs.length) {
            log = TicketLogs[TicketLogs.length - 1].Content;
        }
        return (
            <TabPage {...this.props} backButton={true} title="Job Detail">
                <div className="jd-container">
                    <div>
                        <Map />
                    </div>
                    <div className="margin15">
                        <JobStatus value={TicketStatus + ''} onStatusChange={this.onChangeStatus} />
                    </div>
                    <List style={{ display: 'flex', flexDirection: 'column' }}>
                        <ListItem key="title" onClick={() => alert(Title)}>
                            <p className="primary">{Title}</p>
                        </ListItem>
                        <ListItem key="customer-name">
                            <div className="flex-container">
                                <div className="flex-left">
                                    <p className="primary">{Customer.CustomerName}</p>
                                    <p className="secondary">{Customer.Address}</p>
                                </div>
                                <div className="flex-right">
                                    <Button>Call</Button>
                                </div>
                            </div>
                        </ListItem>
                        <ListItem key="apt" onClick={this.gotoAppointment}>
                            {apt}
                        </ListItem>
                        <ListItem key="item" onClick={this.gotoTicketItem}>
                            <p className="primary">{item}</p>
                        </ListItem>
                        <ListItem key="log" onClick={this.gotoTicketLog}>
                            <div>
                                <p className="primary">History & Notes</p>
                                <p className="secondary"> {log}</p>
                            </div>
                        </ListItem>
                    </List>
                </div>
            </TabPage>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detail: state.job.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateJob: (detail) => dispatch(updatejob(detail))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobDetailView);