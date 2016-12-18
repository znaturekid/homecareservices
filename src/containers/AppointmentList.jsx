import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List , ListItem} from 'react-onsenui';
import TabPage from '../components/TabPage';
import moment from 'moment';
class AppointmentList extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.onRowTap = this.onRowTap.bind(this);
    }
    onRowTap(detail) {
        // const {navigator} = this.props;
        // navigator.pushPage({ navigator, component: JobDetailView, title: 'hieu', key: 'JOB_DETAI_VIEW', detail});
    }
    renderRow(row, index) {
        const {StartDate, EndTime, User } = row;
            return (
                <ListItem key={index} onClick={this.onRowTap.bind(this, row)}>
                    <div>
                        <p className="primary"> {moment(StartDate).format('MM-DD-YYYY')}</p>
                        <br />
                        <p className="secondary">{moment(StartDate).format('HH:mm a')} - {moment(EndTime).format('HH:mm a')}</p>
                        <br />
                        <p className="secondary" style={{color: '#4282cc', fontWeight: 'bold'}}>Assignee: {User.DisplayName}</p>
                    </div>            
                </ListItem>
            )
    }
    render() {
        const {apppointments} = this.props;
        return (
            <TabPage {...this.props} backButton={true} title="Schedule Appointment">
                <div className="jd-container">
                    <List dataSource={apppointments} 
                        renderRow={this.renderRow} />
                    </div>
            </TabPage>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        apppointments: state.appointment.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);