import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Login} from "./components/pages/login";
import {Router, Route} from 'react-router';

ReactDOM.render(<Router>
    <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        {/*<Route path="inbox" component={Inbox}>*/}
        {/*<Route path="messages/:id" component={Message} />*/}
        {/*</Route>*/}
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
