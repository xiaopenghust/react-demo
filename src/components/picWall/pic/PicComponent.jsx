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
            <div className="pic">
                <img src={this.props.obj.url} style={this.state.style} className={this.state.rotate}/>
                <p>这是一段描述</p>
            </div>
        )
    }
}

export default PicComponent;