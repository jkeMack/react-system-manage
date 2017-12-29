import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Login} from "./components/pages/login";
import {BasicTable} from "./components/pages/basic-table";
import {BasicForm} from "./components/pages/basic-form";
import {Router, Route} from 'react-router';

ReactDOM.render(<Router>
    <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="table" component={BasicTable}/>
        <Route path="form" component={BasicForm}/>
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
