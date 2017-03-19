import React from 'react';
import {connect} from 'react-redux';
import {getState} from 'redux';
import store from './store/store.js';

class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('props---->', props);
        this.state = {likesCount1: 0,likesCount2: 0};
        this.unsubscribe = store.subscribe(()=>{
            this.setState(store.getState().cntReducer);
            console.log("subscribe---->",store.getState());
        });

        this.onLike1 = this.onLike1.bind(this);
        this.onLike2 = this.onLike2.bind(this);
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    onLike1() {
        this.props.dispatch({
            type: 'TO_COUNT1'
        });
    }

    onLike2() {
        this.props.dispatch({
            type: 'TO_COUNT2'
        });
    }

    render() {
        return (
            <div>
                Likes : <span>{this.state.likesCount1}</span>|
                Likes : <span>{this.state.likesCount2}</span>
                <div>
                    <button onClick={this.onLike1}>Like Me</button>
                    <button onClick={this.onLike2}>Like 2</button>
                </div>
            </div>
        );
    }

}

function select(state) {
    return {
        likesCount1:state.cntReducer.likesCount1,
        likesCount2:state.cntReducer.likesCount2
    };
}

export default connect(select)(AwesomeComponent);
