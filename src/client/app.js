import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import BrevementePage from '../pages/brevemente';
import HistoriaPage from '../pages/historia';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notfound';
import PedidoPage from '../pages/pedido';
import ViajarPage from '../pages/viajar';

class App extends React.Component {

    render() {
        return <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/historia" component={HistoriaPage} />
            <Route exact path="/pedido" component={PedidoPage} />
            <Route exact path="/viajar" component={BrevementePage} />
            <Route exact path="/nossa-historia" component={BrevementePage} />
            <Route exact path="/gang-madrinhal" component={BrevementePage} />
            <Route exact path="/padrinho" component={BrevementePage} />
            <Route exact path="/casamento" component={BrevementePage} />
            <Route exact path="/estadia" component={BrevementePage} />
            <Route exact path="/sugestoes" component={BrevementePage} />
            <Route exact path="/fotos" component={BrevementePage} />
            <Route exact path="/contactos" component={BrevementePage} />
            <Route exact path="/rsvp" component={BrevementePage} />
            <Route component={NotFoundPage} />
        </Switch>;
    }
}

export default hot(module)(App);