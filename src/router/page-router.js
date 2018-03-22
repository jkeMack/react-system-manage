import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import {Index} from '../components/index/index';
import {CrudDemo} from "../components/crudDemo/crudDemo";
import {Statistics} from "../components/statistics/statistics";
import {ConfigForm} from "../components/configForm/configForm";
import {Editor} from "../components/editor/editor";
import {MarkdownDemo} from "../components/markdown/markdown";

export default class PageRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home/index" component={Index}/>
                <Route path="/home/crud" component={CrudDemo}/>
                <Route path="/home/configForm" component={ConfigForm}/>
                <Route path="/home/statistics" component={Statistics}/>
                <Route path="/home/editor" component={Editor}/>
                <Route path="/home/markdown" component={MarkdownDemo}/>
                <Redirect to="/home/index"/>
            </Switch>
        )
    }
}