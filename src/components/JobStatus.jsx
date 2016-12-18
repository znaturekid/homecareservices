import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Select, { Option } from 'rc-select';

class JobStatus extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: this.props.value
        }
    }
    getText() {

    }
    onChange(value) {
        if (this.props.onStatusChange) {
            this.props.onStatusChange(value);
        }
        this.setState({value});
    }
    render() {
        const {value} = this.props;
        return (
            <Select {...this.props}
                value={this.state.value}
                onChange={this.onChange}
                optionLabelProp="children"
                style={{width:'100%', height: '50px'}}
                > 
                <Option value="0" text="NEW" >NEW</Option>
                <Option value="1" text="OPEN">OPEN</Option>
                <Option value="2" text="IN-PROGRESS">IN-PROGRESS</Option>
                <Option value="3" text="DONE">DONE</Option>
            </Select>
        )
    }
}

export default JobStatus;
