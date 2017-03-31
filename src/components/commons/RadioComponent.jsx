import React from 'react';
import './radio.scss';

class InputComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.obj;
        this.state.value = this.state.defaultValue;
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.state.value = parseInt(event.target.value);
        this.setState(this.state);
        this.state.onChange(event);
    }

    render() {
        return (
            <div className="input-group panel radioContainer">
                <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
                <div>
                    {
                        this.state.radios.map((radio)=>{
                            return <label className="demo--label" key={radio.value}>
                                <input className="demo--radio" type="radio" name="sex"  value={radio.value} onChange={this.onChange} checked={this.state.value == radio.value}/>
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