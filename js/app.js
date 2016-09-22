import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import TabBarPage from './tabBar.js';



ReactDOM.render(
  (   
       <TabBarPage />
   ), document.getElementById('content')
  );
