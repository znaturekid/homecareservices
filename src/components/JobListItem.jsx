import React, { Component } from 'react';

class JobListItem extends Component {
    render() {
        const {Title, CustomerName, TicketId, TicketStatus, Customer } = this.props.row;
        const status = ['NEW', 'OPEN', 'IN-PROGRESS', 'DONE'][TicketStatus];
        return (
            <div>
                <p className="primary">{Title}</p>
                <p className="secondary">{Customer.CustomerName}</p>
                <p className="status">{status}</p>
            </div>
        );
    }
}
export default JobListItem;