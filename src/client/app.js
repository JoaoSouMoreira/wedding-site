import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import { routes } from './routes';
import NotFoundPage from '../pages/notfound';

class App extends React.Component {

    getRoutes() {
        return routes.map((route) => <Route exact key={route.path} path={route.path} component={route.component} />)
    }

    render() {
        return <Switch>
            {this.getRoutes()}
            <Route component={NotFoundPage} />
        </Switch>;
    }
}

export default hot(module)(App);