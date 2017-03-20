import React from 'react';
import {render} from 'react-dom';
import {  browserHistory } from 'react-router';
import './detail.scss';
import axios from 'axios';

class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.location.state.user;
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        axios.get("data/user.json").then((data)=>{
            if(data.status === 200){
                this.setState(data.data);
            }
        });
        console.log('componentDidMount');
    }


    render () {
        return (
            <div className="detail">
                <div className="panel panel-default">
                    <div className="panel-heading">列表</div>
                    <div className="panel-body">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>性别</th>
                                <th>生日</th>
                                <th>身份证号</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td>{this.state.age}</td>
                                <td>{this.state.sex}</td>
                                <td>{this.state.birthday}</td>
                                <td>{this.state.cardNo}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailComponent;
