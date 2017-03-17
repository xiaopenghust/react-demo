import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router';
import AwesomeComponent from './AwesomeComponent.jsx';
import HomeComponent from './home/HomeComponent.jsx';
import DetailComponent from './detail/DetailComponent.jsx';
import NoMatch from './NoMatch.jsx';
import commons from './main.css';



class App extends React.Component {


    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="home" component={HomeComponent} />
            <Route path="detail" component={DetailComponent}/>
            <Route path="click" component={AwesomeComponent}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('app'))

