import React from 'react';
import _ from 'lodash';

class SelectComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.obj;
        console.log('state--->',this.state);
    }

    render() {
        return (
            <div className="input-group panel selectContainer">
                <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
                <select className="form-control">
                    <option>{this.state.placeholder}</option>
                    {
                        this.state.items.map((item)=>{
                            return <option value={item.value} selected={item.value === this.state.defaultValue||0}>{item.text}</option>
                        })
                    }
                </select>
            </div>)
    }
}
export default SelectComponent;