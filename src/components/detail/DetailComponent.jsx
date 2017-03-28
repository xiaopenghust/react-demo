import React from 'react';
import {render} from 'react-dom';
import {  browserHistory } from 'react-router';
import './detail.scss';
import AjaxUtils from '../ajax/AjaxUtils.js';

class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.state = props.location.state.user;
        this.state = {
            users:[]
        }
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        AjaxUtils.get("http://localhost:3000/users").then((data)=>{
            console.log('detail request success',data);
            if(data.status === 200){
                this.setState(Object.assign({},this.state, {users:data.data}));
                console.log('this state--->',this.state);
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
                            {
                                this.state.users.map((user)=>{
                                    return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.sex}</td>
                                        <td>{user.birthday}</td>
                                        <td>{user.cardNo}</td>
                                    </tr>)
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailComponent;
