import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import SignIn from './components/SignIn';

import {Router, Route, hashHistory, IndexRedirect} from "react-router";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="/home"/>
            <Route path="home" component={Home}/>
            <Route path="signin" component={SignIn}/>            
        </Route>
    </Router>, document.getElementById("root"));

