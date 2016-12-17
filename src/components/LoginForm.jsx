import React from 'react';
import { Button, Input } from 'react-onsenui';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            username: '',
            password: ''
        };
    }
    handleUserNameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    handleSubmit() {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.submitLogin(data);
    }
    render() {
        return (
            <section style={{textAlign: 'center', padding: '10px'}}>
                <p>
                    <Input style={{display: 'block'}} placeholder="UserName" modifier='material' float type="text" value={this.state.username} onChange={this.handleUserNameChange} />
                </p>
                <p>
                    <Input placeholder="Password" style={{display: 'block'}} modifier='material' float type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </p>
                <p>
                    <Button onClick={this.handleSubmit} modifier='large'>Login</Button>
                </p>
            </section>
        )
    }
}

export default LoginForm;