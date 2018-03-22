import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { Login } from '../components/login/login';
import { Home } from '../components/home/home';

export default class MainRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path="/home" component={Home}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}