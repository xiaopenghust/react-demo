import React from 'react';

class SelectComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.obj;
    }

    setItems(items){
        this.setState(Object.assign({},this.state, {items:items||[]}));
        this.refs.select.value='';
    }

    render() {
        return (
            <div className="input-group panel selectContainer">
                <span className="input-group-addon" id="basic-addon1">{this.state.label}：</span>
                <select className="form-control" defaultValue={this.state.defaultValue} onChange={this.state.onChange} ref="select">
                    <option value=''>{this.state.placeholder}</option>
                    {
                        this.state.items.map((item)=>{
                            return <option value={item.value} key={item.value}>{item.text}</option>
                        })
                    }
                </select>
            </div>)
    }
}
export default SelectComponent;