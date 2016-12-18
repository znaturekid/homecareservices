import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List , ListItem} from 'react-onsenui';
import HistoryLogListItem from '../components/HistoryLogListItem';
import TabPage from '../components/TabPage';
class HistoryLogList extends Component {
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
            return (
                <ListItem key={index} onClick={this.onRowTap.bind(this, row)}>
                    <HistoryLogListItem row={row} />
                </ListItem>
            )
    }
    render() {
        const {ticketLogs} = this.props;
        return (
            <TabPage {...this.props} backButton={true} title="History & Notes">
                <div className="jd-container">
                    <List dataSource={ticketLogs} 
                        renderRow={this.renderRow} />
                    </div>
            </TabPage>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        ticketLogs: state.ticketLog.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryLogList);