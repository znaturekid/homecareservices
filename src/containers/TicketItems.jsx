import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List , ListItem} from 'react-onsenui';
import TabPage from '../components/TabPage';
import moment from 'moment';
class TicketItemList extends Component {
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
        const {Item, Quantity, Price } = row;
            return (
                <ListItem key={index} onClick={this.onRowTap.bind(this, row)}>
                    <div>
                        <p className="primary"> {Item.ItemName}</p>
                        <br />
                        <p className="secondary">{Quantity} x ${Price} </p>
                        <br />
                        <p className="secondary" style={{color: '#4282cc', fontWeight: 'bold'}}>Total: ${Quantity * Price}</p>
                    </div>            
                </ListItem>
            )
    }
    render() {
        const {ticketItems} = this.props;
        return (
            <TabPage {...this.props} backButton={true} title="Ticket Item">
                <div className="jd-container">
                    <List dataSource={ticketItems} 
                        renderRow={this.renderRow} />
                    </div>
            </TabPage>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        ticketItems: state.ticketItem.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketItemList);