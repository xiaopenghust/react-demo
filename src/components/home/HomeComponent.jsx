import React from 'react';
import './home.scss';
import InputComponent from '../commons/InputComponent.jsx';
import SelectComponent from '../commons/SelectComponent.jsx';
import RadioComponent from '../commons/RadioComponent.jsx';
import {ButtonToolbar, Button} from 'react-bootstrap';
import DatePickerComponent from '../commons/DatePickerComponent.jsx';
import update from 'react-addons-update';
import { Router, Route, Link, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import AjaxUtils from '../ajax/AjaxUtils.js';
import GlobalApi from '../GlobalApi.js';


class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
                user:{
                    name:'',
                    age:0,
                    sex:1,
                    birthday:'',
                    cardNo:'',
                    time:'',
                    loverType:'1',
                    lovers:'3'
                },
                canSubmit:'disabled'
        };
        this.onSubimt = this.onSubimt.bind(this);
        this.onChangeAttr = this.onChangeAttr.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onSubimt(){
        if(this.checkForm()){
            AjaxUtils.post(GlobalApi.REMOTE_URL + '/users/',this.state.user).then((data)=>{
                console.log('请求成功',data);
                hashHistory.push({
                    pathname:'/detail'
                    ,search: '?name=sharp'
                    //,state: { user: this.state.user }
                });
            })
        }else{

        }
    }

    checkForm(value){
        if(this.state.user){
            for(name in this.state.user){
                if(!this.state.user[name] || this.state.user[name] === '' ){
                    if(this.state.canSubmit === ''){
                        this.setState(Object.assign({},this.state,{canSubmit : 'disabled'}));
                    }
                    return false;
                }
            }
        }
        this.setState(Object.assign({},this.state,{canSubmit : ''}));
        return true;
    }

    onChangeAttr(event,attrName){
        this.onChangeValue(event.target.value, attrName);
    }

    onChangeValue(value,attrName){
        Reflect.set(this.state.user,attrName,value);
        this.setState(this.state);
    }

    getFormInputs(){
        let _self = this;
        return [
            {
                label:'姓名',
                valueType:'text',
                placeholder:'请输入姓名',
                type:'input',
                onChange:(event)=>{
                    this.onChangeAttr(event, "name");
                    this.checkForm();
                }
            },
            {
                label:'年龄',
                valueType:'number',
                placeholder:'请输入年龄',
                type:'input',
                onChange:(event)=>{
                    this.onChangeAttr(event, "age");
                    this.checkForm(event);
                }
            },
            {
                label:'性别',
                type:'radio',
                radios:[
                    {
                        text:'男',
                        value:1
                    },
                    {
                        text:'女',
                        value:2
                    }
                ],
                onChange:(event)=>{
                    this.onChangeAttr(event, "sex");
                    this.checkForm(event);
                },
                defaultValue:1
            },
            {
                label:'生日',
                valueType:'date',
                placeholder:'请输入生日',
                type:'input',
                onChange:(event)=>{
                    this.onChangeAttr(event, "birthday");
                    this.checkForm(event);
                }
            },
            {
                label:'身份证号',
                valueType:'text',
                placeholder:'请输入身份证号',
                type:'input',
                onChange:(event)=>{
                    this.onChangeAttr(event, "cardNo");
                    this.checkForm(event);
                }
            },
            {
                label:'时间',
                placeholder:'请输入时间',
                type:'datePicker',
                onChange:(value)=>{
                    this.onChangeValue(value,'time');
                    this.checkForm(event);
                }
            },
            {
                label:'爱好种类',
                placeholder:'请选择爱好种类',
                type:'select',
                defaultValue:1,
                items:[
                    {text:'球类',value:1},
                    {text:'文学类',value:2}
                ],
                onChange:(event)=>{
                    switch(event.target.value){
                        case "1":
                            this.refs.loversSelect.setItems([
                                {text:'足球',value:1},
                                {text:'篮球',value:2},
                                {text:'保龄球',value:3},
                                {text:'高尔夫球',value:4}
                            ]);
                            break;
                        case "2":
                            this.refs.loversSelect.setItems([
                                {text:'语文',value:1},
                                {text:'数学',value:2},
                                {text:'英语',value:3}
                            ]);
                            break;
                        default:
                            this.refs.loversSelect.setItems([]);
                    }
                    this.onChangeAttr(event, "loverType");
                    this.checkForm(event);
                }
            },
            {
                label:'爱好',
                placeholder:'请选择爱好',
                type:'select',
                onChange:(event)=>{
                    this.onChangeAttr(event, "lovers");
                    this.checkForm(event);
                },
                defaultValue:3,
                items:[
                    {text:'足球',value:1},
                    {text:'篮球',value:2},
                    {text:'保龄球',value:3},
                    {text:'高尔夫球',value:4}
                ],
                ref:'loversSelect'
            },
        ]
    }

    render() {
        let inputs = this.getFormInputs();
        return (
          <div className="home">
              <div className="page-header text-center">
                  <h4><font color="white">深圳百合教育机构</font> <small><font color="#ccc">报名申请</font></small></h4>
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading">基本信息</div>
                  <div className="panel-body">
                      <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              {
                                  inputs.map((input)=>{
                                      switch(input.type){
                                          case "input":
                                              return <InputComponent key={input.label} obj={input}/>;
                                          case "radio":
                                              return <RadioComponent key={input.label} obj={input}/>;
                                          case "select":
                                              return <SelectComponent key={input.label} obj={input} ref={input.ref}/>;
                                          case "datePicker":
                                              return <DatePickerComponent key={input.label} obj={input}/>;
                                      }
                                      return <InputComponent key={input.label} obj={input}/>;
                                  })
                              }
                          </div>
                      </div>
                      <div style={{textAlign:'center'}}>
                            <input type="button" className="submit-button" onClick={this.onSubimt} value='提    交' disabled={this.state.canSubmit} style={this.state.canSubmit === 'disabled' ? {background:'#eee'} : {}}/>
                      </div>
                  </div>
              </div>
          </div>
        );
    }

}

export default Home;