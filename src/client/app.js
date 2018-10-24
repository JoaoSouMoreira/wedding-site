import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import BrevementePage from '../pages/brevemente';
import ContactosPage from '../pages/contactos';
import FotosPage from '../pages/fotos';
import HistoriaPage from '../pages/historia';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notfound';
import PedidoPage from '../pages/pedido';
import ViajarPage from '../pages/viajar';

class App extends React.Component {

    render() {
        return <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/pedido" component={PedidoPage} />
            <Route exact path="/viajar" component={ViajarPage} />
            <Route exact path="/nossa-historia" component={HistoriaPage} />
            <Route exact path="/gang-madrinhal" component={BrevementePage} />
            <Route exact path="/padrinho" component={BrevementePage} />
            <Route exact path="/casamento" component={BrevementePage} />
            <Route exact path="/estadia" component={BrevementePage} />
            <Route exact path="/sugestoes" component={BrevementePage} />
            <Route exact path="/fotos" component={FotosPage} />
            <Route exact path="/contactos" component={ContactosPage} />
            <Route exact path="/rsvp" component={BrevementePage} />
            <Route component={NotFoundPage} />
        </Switch>;
    }
}

export default hot(module)(App);