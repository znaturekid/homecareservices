import React, { Component } from 'react';

class JobListItem extends Component {
    render() {
        const {Title, CustomerName, TicketId, TicketStatus } = this.props.row;
        return (
            <div>
                <p className="title">{Title}</p>
                <p className="customer">{CustomerName}</p>
                <p className="status">{TicketStatus}</p>
            </div>
        );
    }
}
export default JobListItem;