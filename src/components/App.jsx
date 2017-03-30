import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router';
import AwesomeComponent from './clickCount/AwesomeComponent.jsx';
import HomeComponent from './home/HomeComponent.jsx';
import DetailComponent from './detail/DetailComponent.jsx';
import PicWallComponents from './picWall/PicWallComponents.jsx';
import NoMatch from './NoMatch.jsx';
import './main.scss';
import {Provider} from 'react-redux';
import store from './store/store.js';
import './main.scss';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <footer>
                    <Link to="/home">报名</Link>
                    <Link to="/detail">列表</Link>
                    <Link to="/photos">照片墙</Link>
                    <Link to={{pathname:'click',query:{ qhfrom : "home"}, hash:'#user',}}>我的</Link>
                </footer>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home" component={HomeComponent} />
                <Route path="detail" component={DetailComponent}/>
                <Route path="click" component={AwesomeComponent}/>
                <Route path="photos" component={PicWallComponents}/>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'))

