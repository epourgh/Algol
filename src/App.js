import "./styles/Global.module.scss";
import { HashRouter as Router, Route } from 'react-router-dom'
import React from "react";
import { Provider } from 'react-redux'

import NavComponent from './component/nav.component.js'

import landing from './pages/landing.page'
import search from './pages/search.page'
import history from './pages/history.page'

import store from './store'

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <NavComponent />
                <Route path='/' component={landing} exact />
                <Route path='/search' component={search} exact />
                <Route path='/history' component={history} exact />
            </Provider>
        </Router>
    );
}

export default App;

