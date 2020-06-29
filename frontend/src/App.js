import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home'
import Login from './Login';
import Users from './Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path ="/" exact component={Home} />
                    <Route path ="/login" component={Login} />
                    <Route path ="/users" exact component={Users} />
                </Switch>
            </div>
            </Router>
        );
    }
}
