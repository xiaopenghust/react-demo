import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';

class DatePickerComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.obj;
    }

    render() {
        return (
            <div className="input-group panel">
                <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
                <DateTimeField defaultText={this.state.placeholder} style={{width:'100%',backgroundColor:'red'}} inputFormat={'YYYY-MM-DD'} mode={'date'}/>
            </div>)
    }
}
export default DatePickerComponent;