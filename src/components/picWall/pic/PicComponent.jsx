import React from 'react';
import './pic.scss';

class PicComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style:{
                'top':this.props.obj.top,
                'left':this.props.obj.left,
            },
            rotate:'transform-rotate'+this.props.obj.rotate
        }
    }

    componentWillMount(){
    }

    render(){
        return (
            <div className="picContainer">
                <div className={"pic " + this.state.rotate}  style={this.state.style}>
                    <img src={this.props.obj.url}/>
                    <p>{this.props.obj.text}</p>
                </div>
            </div>
        )
    }
}

export default PicComponent;