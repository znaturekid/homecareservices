import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-onsenui';
import AddJobForm from '../components/AddJobForm';
import JobDetailView from './JobDetailView';
import { createjob, updatejob } from '../actions/job';
import { fetchcustomers } from '../actions/customer';
import TabPage from '../components/TabPage';
class AddJob extends Component {
    componentDidMount(){
        if (!this.props.fetchedCustomer) {
            this.props.fetchcustomers();
        }
    }
    render() {
        const {saveJob} = this.props; 
        const data = {
            title: '',
            description: '',
            ticketStatus: 0
        }
        return (
             <TabPage {...this.props} backButton={true} title="Create A New Job" >
                    <AddJobForm onSave={saveJob} data={data}  customers={this.props.customers} />
            </TabPage>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        jobs: state.job.list,
        customers: state.customer.list,
        fetchedCustomer: state.customer.fetched
    }
}
const saveJob = (job) => {
    if (job.TicketId) {
        updatejob(job);
    } else {
        createjob(job);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveJob,
        fetchcustomers: () => dispatch(fetchcustomers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddJob);