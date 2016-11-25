import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Route, Router, IndexRoute, IndexRedirect, hashHistory, browserHistory} from 'react-router';
import {Main} from 'Main';
import {MainContent} from 'MainContent';
const NewRequest = require('NewRequest');
const RequestsPasswordReset = require('RequestsPasswordReset');
import RequestsAccess from 'RequestsAccess';
import {RequestAccessBlank} from 'RequestAccessBlank';
import {RequestsAccessNew} from 'RequestsAccessNew';
import {RequestsAccessTable} from 'RequestsAccessTable';
import configureStore from 'configureStore';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyle');

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <Route path='new_request' component={NewRequest}>
        </Route>
        <Route path='requests_password_reset' component={RequestsPasswordReset}>
        </Route>
        <Route path='requests_for_access' component={RequestsAccess}>
          <IndexRedirect to='/view'/>
          <Route path='/view' component ={RequestsAccessNew}>
            <IndexRoute  component={RequestsAccessTable}/>
            <Route path='/view/page/:id' component={RequestsAccessTable}/>
          </Route>
          <Route path='/edit/:state/:id' component={RequestAccessBlank} />
        </Route>
        <IndexRoute component ={MainContent}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
