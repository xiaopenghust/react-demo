import React from 'react';
import _ from 'lodash';

class InputComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.obj;
        this.state.onChange = this.state.onChange.bind(this.props.obj);
    }

    render() {
        return (
            <div className="input-group panel">
                <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
                <div>
                    {
                        this.state.radios.map((radio)=>{
                            return <label className="demo--label">
                                <input className="demo--radio" type="radio" name="sex"  value={radio.value} onChange={this.state.onChange}/>
                                <span className="demo--radioInput"></span>{radio.text}
                            </label>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default InputComponent;