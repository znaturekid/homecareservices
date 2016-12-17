import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'react-onsenui';
import TabPage from '../components/TabPage';
class JobDetailView extends Component {
    render() {
        const { Title, CustomerName} = this.props.detail;
        return (
            <TabPage {...this.props} backButton={true} title="Job Detail">
            <List>
                <ListItem key="title" onClick={()=>alert(Title)}>
                    {Title}
                </ListItem>
                <ListItem key="customer-name">
                    <p>{CustomerName}</p>
                </ListItem>
            </List>
            </TabPage>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detail: state.job.detail
    }
}
export default connect(mapStateToProps)(JobDetailView);