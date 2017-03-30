import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';

class DatePickerComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.obj;
    }

    onChange(value){
        let _val = value;
        if(value){
            console.log(value);
            _val = new Date(parseInt(value)).toLocaleDateString();
        }
        this.state.onChange(_val);
    }

    render() {
        return (
            <div className="input-group panel">
                <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
                <DateTimeField defaultText={this.state.defaultValue || this.state.placeholder}
                               style={{width:'100%',backgroundColor:'red'}}
                               inputFormat={'YYYY-MM-DD'}
                               onChange={(newDate) => {this.onChange(newDate)}}/>
            </div>)
    }
}
export default DatePickerComponent;