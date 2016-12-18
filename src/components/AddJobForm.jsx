import React from 'react';
import { Button, Input } from 'react-onsenui';
import Select, { Option } from 'rc-select';
class AddJobForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = {
            CustomerId: ''
        }
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleAddressChange(e) {
        this.setState({ Address: e.target.value });
    }
    handlePhoneChange(e) {
        this.setState({ CustomerPhone: e.target.value });
    }
    handleNameChange(e) {
        this.setState({ CustomerName: e.target.value });
    }
    handleCustomerIdChange(e) {
        this.setState({ CustomerId: e.target.value });
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }
    handleSubmit() {
        const data = {
            Title: this.state.title,
            Description: this.state.description,
            Customer: {
                CustomerName: this.state.CustomerName,
                CustomerPhone: this.state.CustomerPhone,
                Address: this.state.Address,
            },
            CustomerId: this.state.customerId
        }
        this.props.submitLogin(data);
    }
    render() {
        const { title, description} = this.props.data; 
        debugger;
        const cuslist = this.props.customers && this.props.customers.map(x=> {
            return (<Option text={x.CustomerName} value={x.CustomerId}>{x.CustomerName}</Option>);
        })
        return (
            <section style={{textAlign: 'center', padding: '10px'}}>
                <div>
                 <Select {...this.props}
                    value={this.state.CustomerId+''}
                    onChange={this.handleNameChange}
                    optionLabelProp="children"
                    style={{width:'100%'}}
                    compobox={true}
                    > 
                   {cuslist}
                </Select>
                </div>
                 <div>
                    <Input style={{display: 'block'}} 
                        placeholder="Address" 
                        modifier='material' 
                        float 
                        type="text" 
                        value={title} 
                        onChange={this.handleAddressChange} />
                </div>
                 <div>
                    <Input style={{display: 'block'}} 
                        placeholder="Phone" 
                        modifier='material' 
                        float 
                        type="text" 
                        value={title} 
                        onChange={this.handlePhoneChange} />
                </div>
                <div>
                    <Input style={{display: 'block'}} 
                        placeholder="Job Title" 
                        modifier='material' 
                        float 
                        type="text" 
                        value={title} 
                        onChange={this.handleTitleChange} />
                </div>
                <div>
                    <Input placeholder="Job Decription" style={{display: 'block'}} modifier='material' float type="textarea" value={description} onChange={this.handleDescriptionChange} />
                </div>
                <div>
                    <Button onClick={this.handleSubmit} modifier='large'>Save Job</Button>
                </div>
            </section>
        )
    }
}

export default AddJobForm;