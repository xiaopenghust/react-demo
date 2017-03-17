import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Home from './home/Home.jsx';
import commons from './main.css';


class App extends React.Component {
  render () {
    return (
      <div>
          <Home name="sharp"/>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
