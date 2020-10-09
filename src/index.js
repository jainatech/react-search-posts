import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './client/serviceWorker';
import store from '../src/client/store/createstore';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import AppRoutes from '../src/client/containers/Routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'


const browserHistory = createBrowserHistory();

const App = (
  <Provider store={store}>
    <NotificationContainer/>
    <Router history={browserHistory}>
      <AppRoutes />
    </Router>
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
