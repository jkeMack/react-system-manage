import './App.css';
import React, {Component} from 'react';
import {Header} from './components/common/header';
import {Sidebar} from './components/common/sidebar';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header></Header>
                <Sidebar></Sidebar>
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}

export default App;

