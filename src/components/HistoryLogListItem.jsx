import React, { Component } from 'react';
import moment from 'moment';
class HistoryLogListItem extends Component {
    render() {
        const { Content, LogType, CreateDate } = this.props.row;
        return (
            <div>
                <p className="primary">{Content}</p>
                <p className="secondary">{moment(CreateDate).format('MM-DD-YYYY HH:mm a')}</p>
            </div>
        );
    }
}
export default HistoryLogListItem;