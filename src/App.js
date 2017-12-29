import React, {Component} from 'react';
import './App.css';
import {Header} from './components/common/header';
import {Sidebar} from './components/common/sidebar';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
                <div style={{marginLeft:200+'px',padding:20+'px'}} >{this.props.children}</div>
            </div>
        );
    }
}

export default App;

