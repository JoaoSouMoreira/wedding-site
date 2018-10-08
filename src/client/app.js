import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import HistoriaPage from '../pages/historia';
import HomePage from '../pages/home';
import PedidoPage from '../pages/pedido';
import ViajarPage from '../pages/viajar';

class App extends React.Component {

    render() {
        return <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/historia" component={HistoriaPage} />
            <Route exact path="/pedido" component={PedidoPage} />
            <Route exact path="/viajar" component={ViajarPage} />
        </Switch>;
    }
}

export default hot(module)(App);