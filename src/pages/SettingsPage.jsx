import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { Page, Toolbar, Switch, Button, List , ListItem, Row, Col} from 'react-onsenui';
import NavToolBar from '../Components/NavToolBar';
import doLogoutSuccess from '../actions/authenticate'
class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pushNotification: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({
      pushNotification: value
    });
  }
  render() {
    const {navigator, title} = this.props;
    return (
      <Page
        renderToolbar={() => <NavToolBar title={title} navigator={navigator} />}>
        <div>
        <List style={{ display: 'flex', flexDirection: 'column' }}>
          <ListItem key="title">
            <Row>
              <Col>
                <p className="primary">Push Notifications</p>
                </Col>
              <Col style={{textAlign: 'right'}}> 
                <Switch checked={this.state.checked} onChange={this.handleChange} />
              </Col>
            </Row>
          </ListItem>
          <ListItem key="myaccout">
           <p className="primary">My Account</p>
          </ListItem>
          <ListItem key="about">
           <p className="primary">About</p>
          </ListItem>
        </List>
          <Button modifier='large' onClick={this.doLogoutSuccess}> Logout</Button>
          </div>
      </Page>
    )
  }
}

export default connect(null, (dispatch) => {
  return {
    doLogoutSuccess: () => dispatch(doLogoutSuccess())
  }
})(SettingsPage)