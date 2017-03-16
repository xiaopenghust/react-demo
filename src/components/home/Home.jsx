import React from 'react';
import homeCss from './home.scss';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            user:{
                name:'sharp',
                age:15,
                sex:1,
                birthday:'1987-08-05',
                cardNo:'420822198705084554'
            }
        };
        this.onSexChange = this.onSexChange.bind(this);
    }

    onSexChange(e){
        this.state.user.sex = e.currentTarget.value;
        this.setState({user:this.state.user});
        console.log(this.state.user);
    }

    render() {
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
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">姓名：</span>
                                  <input type="text" className="form-control" placeholder={'请输入学生姓名'+this.props.name} aria-describedby="basic-addon1" value={this.state.user.name} defaultValue={this.state.user.name}/>
                              </div>
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">年龄：</span>
                                  <input type="number" className="form-control" placeholder="请输入学生年龄" aria-describedby="basic-addon1" value={this.state.user.age} />
                              </div>
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">性别：</span>
                                  <div>
                                      <label className="demo--label">
                                          <input className="demo--radio" type="radio" name="sex" checked={this.state.user.sex == "1"} value="1" onChange={this.onSexChange} />
                                              <span className="demo--radioInput"></span>男
                                      </label>
                                      <label className="demo--label">
                                          <input className="demo--radio" type="radio" name="sex" checked={this.state.user.sex == "2"} value="2" onChange={this.onSexChange}/>
                                              <span className="demo--radioInput"></span>女
                                      </label>
                                  </div>
                              </div>
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">生日：</span>
                                  <input type="date" className="form-control" placeholder="请输入学生生日" aria-describedby="basic-addon1" value={this.state.user.birthday}  />
                              </div>
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">身份证号：</span>
                                  <input type="number" className="form-control" placeholder="请输入学生身份证号" aria-describedby="basic-addon1" value={this.state.user.cardNo} />
                              </div>
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">年龄：</span>
                                  <input type="number" className="form-control" placeholder="请输入学生年龄" aria-describedby="basic-addon1"/>
                              </div>
                              <div className="input-group panel">
                                  <span className="input-group-addon" id="basic-addon1">年龄：</span>
                                  <input type="number" className="form-control" placeholder="请输入学生年龄" aria-describedby="basic-addon1"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  </form>
              </div>
          </div>
        );
    }

}

export default Home;