import React from 'react';
import {render} from 'react-dom';
import {  browserHistory } from 'react-router';
import './detail.scss';
import AjaxUtils from '../ajax/AjaxUtils.js';
import GlobalApi from '../GlobalApi.js';

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
        AjaxUtils.get(GlobalApi.REMOTE_URL + '/users').then((data)=>{
            console.log('detail request success',data);
            if(data.status === 200){
                this.setState(Object.assign({},this.state, {users:data.data}));
                console.log('this state--->',this.state);
            }
        });
        console.log('componentDidMount');
    }

    deleteUser(id){
        AjaxUtils.delete(GlobalApi.REMOTE_URL + '/users/'+id);
    }


    render () {
        return (
            <div className="detail">
                <div className="panel panel-default">
                    <div className="panel-heading">列表</div>
                    <div className="panel-body">
                        <table className="table table-bordered" style={{wordBreak:'break-all'}}>
                            <thead>
                            <tr>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>性别</th>
                                <th>生日</th>
                                <th>身份证号</th>
                                <th>时间</th>
                                <th>爱好种类</th>
                                <th>爱好</th>
                                <th>操作</th>
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
                                        <td>{user.time}</td>
                                        <td>{user.loverType}</td>
                                        <td>{user.lovers}</td>
                                        <td><a href="javascript:void(0)" onClick={()=>{this.deleteUser(user.id)}}>删除</a></td>
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
