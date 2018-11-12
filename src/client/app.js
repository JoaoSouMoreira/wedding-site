import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import { routes } from './routes';
import NotFoundPage from '../pages/404';
import strings from './localizations';

class App extends React.Component {

    constructor(props) {
        super(props);
        strings.setLanguage('pt');
    }

    getRoutes() {
        return routes.map((route) => <Route exact key={route.path} path={route.path} component={route.component}/>)
    }

    render() {
        return <Switch>
            {this.getRoutes()}
            <Route component={NotFoundPage} />
        </Switch>;
    }
}

export default hot(module)(App);