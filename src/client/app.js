import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home';
import ViajarPage from '../pages/viajar';

class App extends React.Component {

    render() {
        return <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/viajar" component={ViajarPage} />
        </Switch>;
    }
}

export default hot(module)(App);