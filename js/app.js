import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import { Button } from 'antd-mobile';
import HelloHandler from './hello.js';
// import Forms from './form.js';
// import Timer from './timer.js';
// import Menu from './menu.js';
// import Data from './data.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/hello" className="hellolink">Say Hello</Link>
        {this.props.children}
      </div>
    );
  }
});


render(
  ( <div>
     
        <Button>Hello world</Button>
    </div>), document.getElementById('content'));
