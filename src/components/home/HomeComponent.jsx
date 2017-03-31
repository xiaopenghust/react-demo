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
                age:'',
                sex:1,
                birthday:'',
                cardNo:'',
                time:'',
                loverType:'',
                lovers:''
            },
            canSubmit:'disabled'
        };
        if(props.location.state && props.location.state.user){
            this.state = Object.assign({},this.state,{user:props.location.state.user});
            this.state = Object.assign({},this.state,{canSubmit:this.checkForm()? '':'disabled'});
        }
        this.onSubimt = this.onSubimt.bind(this);
        this.onChangeAttr = this.onChangeAttr.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        console.log(this.state);
    }


    componentWillMount(){
    }

    componentDidMount(){

    }

    onSubimt(){
        if(this.checkForm()){
            if(this.state.user.id){
                let id = this.state.user.id;
                delete this.state.user.id;
                AjaxUtils.put(GlobalApi.REMOTE_URL + '/users/'+id,this.state.user).then((data)=>{
                    console.log('请求成功',data);
                    hashHistory.push({
                        pathname:'/detail'
                        ,search: '?name=sharp'
                        //,state: { user: this.state.user }
                    });
                })
            }else{
                AjaxUtils.post(GlobalApi.REMOTE_URL + '/users/',this.state.user).then((data)=>{
                    console.log('请求成功',data);
                    hashHistory.push({
                        pathname:'/detail'
                        ,search: '?name=sharp'
                        //,state: { user: this.state.user }
                    });
                })
            }

        }else{

        }
    }

    checkForm(){
        if(this.state.user){
            for(name in this.state.user){
                if(name === 'canSubmit')continue;
                if(!this.state.user[name] || this.state.user[name] === '' ){
                    return false;
                }
            }
        }
        return true;
    }

    setSubmitButtonDisabled(){
        this.setState('disabled',this.checkForm());
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
                    this.setSubmitButtonDisabled();
                },
                defaultValue:this.state.user.name
            },
            {
                label:'年龄',
                valueType:'number',
                placeholder:'请输入年龄',
                type:'input',
                onChange:(event)=>{
                    this.onChangeAttr(event, "age");
                    this.setSubmitButtonDisabled();
                },
                defaultValue:this.state.user.age
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
                    this.setSubmitButtonDisabled();
                },
                defaultValue: this.state.user.sex || 1
            },
            {
                label:'生日',
                valueType:'date',
                placeholder:'请输入生日',
                type:'input',
                defaultValue: this.state.user.birthday,
                onChange:(event)=>{
                    this.onChangeAttr(event, "birthday");
                    this.setSubmitButtonDisabled();
                }
            },
            {
                label:'身份证号',
                valueType:'text',
                placeholder:'请输入身份证号',
                type:'input',
                defaultValue: this.state.user.cardNo,
                onChange:(event)=>{
                    this.onChangeAttr(event, "cardNo");
                    this.setSubmitButtonDisabled();
                }
            },
            {
                label:'时间',
                placeholder:'请输入时间',
                type:'datePicker',
                defaultValue: this.state.user.time,
                onChange:(value)=>{
                    this.onChangeValue(value,'time');
                    this.setSubmitButtonDisabled();
                }
            },
            {
                label:'爱好种类',
                placeholder:'请选择爱好种类',
                type:'select',
                defaultValue: this.state.user.loverType,
                items:[
                    {text:'球类',value:1},
                    {text:'文学类',value:2}
                ],
                onChange:(event)=>{
                    this.refs.loversSelect.setItems(this.getLoversItems(event.target.value));
                    this.onChangeAttr(event, "loverType");
                    this.setSubmitButtonDisabled();
                }
            },
            {
                label:'爱好',
                placeholder:'请选择爱好',
                type:'select',
                onChange:(event)=>{
                    this.onChangeAttr(event, "lovers");
                    this.setSubmitButtonDisabled();
                },
                defaultValue: this.state.user.lovers,
                items:this.getLoversItems(this.state.user.loverType),
                ref:'loversSelect'
            },
        ]
    }

    getLoversItems(loverType){
        switch(loverType){
            case "1":
                return [
                    {text:'足球',value:1},
                    {text:'篮球',value:2},
                    {text:'保龄球',value:3},
                    {text:'高尔夫球',value:4}
                ];
            case "2":
                return [
                    {text:'语文',value:1},
                    {text:'数学',value:2},
                    {text:'英语',value:3}
                ];
            default:
                return [];
        }
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
                            <input type="button" className="submit-button" onClick={this.onSubimt} value='提    交'
                                   disabled={this.state.canSubmit}
                                   style={this.state.canSubmit === 'disabled' ? {background:'#bbb'} : {}}/>
                      </div>
                  </div>
              </div>
          </div>
        );
    }

}

export default Home;