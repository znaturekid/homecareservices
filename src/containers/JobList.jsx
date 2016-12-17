import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List , ListItem} from 'react-onsenui';
import JobListItem from '../components/JobListItem';
import JobDetailView from './JobDetailView';
import { fetchjob, fetchjobSuccess } from '../actions/job';
class JobList extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.onRowTap = this.onRowTap.bind(this);
    }
    onRowTap(detail) {
        const {navigator, getJob, getJobDetail} = this.props;
        getJobDetail(detail);
        navigator.pushPage({ navigator, component: JobDetailView, title: 'hieu', key: 'JOB_DETAI_VIEW', detail});
        getJob(detail.TicketId);
    }
    renderRow(row, index) {
            return (
                <ListItem key={index} onClick={this.onRowTap.bind(this, row)}>
                    <JobListItem row={row} />
                </ListItem>
            )
    }
    render() {
        const {jobs} = this.props;
        
        return (
            <List dataSource={jobs} 
                renderRow={this.renderRow} />
        );
    }
};
const mapStateToProps = (state) => {
    return {
        jobs: state.job.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getJobDetail: (detail) => dispatch(fetchjobSuccess(detail)),
        getJob: fetchjob
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobList);