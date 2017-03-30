import React from 'react';

class InputComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.obj;
    }

    render() {
        return (
        <div className="input-group panel">
            <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
            <input type={this.state.valueType}
                   className="form-control"
                   placeholder={this.state.placeholder}
                   aria-describedby="basic-addon1"
                   onChange={this.state.onChange}
                   defaultValue={this.state.defaultValue}
                   />
        </div>)
    }
}
export default InputComponent;