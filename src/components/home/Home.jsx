import React from 'react';
import homeCss from './home.scss';
import InputComponent from '../commons/InputComponent.jsx';
import RadioComponent from '../commons/RadioComponent.jsx';
import update from 'react-addons-update';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
                name:'sharp',
                age:15,
                sex:1,
                birthday:'1987-08-05',
                cardNo:'420822198705084554'
        };
        this.onSubimt = this.onSubimt.bind(this);
        this.onChangeAttr = this.onChangeAttr.bind(this);
    }

    onSubimt(){
        console.log(this.state);
    }

    onChangeAttr(event,attrName){
        Reflect.set(this.state,attrName,event.target.value);
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
                    return this.onChangeAttr(event, "name");
                }
            },
            {
                label:'年龄',
                valueType:'number',
                placeholder:'请输入年龄',
                type:'input',
                onChange:(event)=>{
                    return this.onChangeAttr(event, "age");
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
                    return this.onChangeAttr(event, "sex");
                }
            },
            {
                label:'生日',
                valueType:'date',
                placeholder:'请输入生日',
                type:'input',
                onChange:(event)=>{
                    return this.onChangeAttr(event, "date");
                }
            },
            {
                label:'身份证号',
                valueType:'text',
                placeholder:'请输入身份证号',
                type:'input',
                onChange:(event)=>{
                    return this.onChangeAttr(event, "cardNo");
                }
            },
        ]
    }

    render() {
        let inputs = this.getFormInputs();
        return (
          <div class={homeCss.home}>
              <div className="page-header text-center">
                  <h4><font color="white">深圳百合教育机构</font> <small><font color="#ccc">报名申请</font></small></h4>
              </div>
              <div className="panel panel-default">
                  <form >
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
                                      }
                                      return <InputComponent key={input.label} obj={input}/>;
                                  })
                              }
                          </div>
                      </div>
                      <div style={{textAlign:'center'}}>
                            <input type="button" className="btn btn-default" onClick={this.onSubimt} value="提交"/>
                      </div>
                  </div>
                  </form>
              </div>
          </div>
        );
    }

}

export default Home;