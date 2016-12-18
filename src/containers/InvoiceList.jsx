import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List , ListItem, Row, Col} from 'react-onsenui';

class InvoiceList extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.onRowTap = this.onRowTap.bind(this);
    }
    onRowTap(detail) {
        const {navigator, getJob, getJobDetail} = this.props;
        navigator.pushPage({ navigator, component: JobDetailView, title: 'hieu', key: 'JOB_DETAI_VIEW', detail});
    }
    renderRow(row, index) {
        const { InvoiceId, AmountPaid, BalanceDue, TotalAmount, InvoiceStatus } = row;
        const status = ['Draft', 'Sent', 'Unpaid', 'Paid'][InvoiceStatus];
            return (
                <ListItem key={index} onClick={this.onRowTap.bind(this, row)}>
                    <Row>
                        <Row>
                            <Col><p className='primary'>Invoice {InvoiceId}</p></Col>
                            <Col style={{textAlign: 'right'}}><p className='primary'>${TotalAmount}</p></Col> 
                        </Row>
                        <Row>
                            <Col><p className='blue'>Amt Paid: ${AmountPaid}</p></Col>
                            <Col style={{textAlign: 'right'}}><p className='blue'>Balance Amt: ${BalanceDue}</p></Col> 
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col style={{textAlign: 'right'}}><p className="status" style={{display:'inline-block'}}>{status}</p></Col> 
                        </Row>
                    </Row>
                </ListItem>
            )
    }
    render() {
        const {invoices} = this.props;
        
        return (
            <List dataSource={invoices} 
                renderRow={this.renderRow} />
        );
    }
};
const mapStateToProps = (state) => {
    return {
        invoices: state.invoice.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);