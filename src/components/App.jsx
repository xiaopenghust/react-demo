import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import HomeComponent from './home/HomeComponent.jsx';
import DetailComponent from './detail/DetailComponent.jsx';
import NoMatch from './NoMatch.jsx';
import commons from './main.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import store from './store/store.js';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <footer>
                    <Link to="/home">外卖</Link>
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
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'))

