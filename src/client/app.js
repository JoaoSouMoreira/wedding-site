import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import BrevementePage from '../pages/brevemente';
import CasamentoPage from '../pages/casamento';
import ContactosPage from '../pages/contactos';
import EstadiaPage from '../pages/estadia';
import FotosPage from '../pages/fotos';
import GangMadrinhalPage from '../pages/gang-madrinhal';
import HistoriaPage from '../pages/historia';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notfound';
import PedidoPage from '../pages/pedido';
import SugestoesPage from '../pages/sugestoes';
import ViajarPage from '../pages/viajar';

class App extends React.Component {

    render() {
        return <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/pedido" component={PedidoPage} />
            <Route exact path="/viajar" component={ViajarPage} />
            <Route exact path="/nossa-historia" component={HistoriaPage} />
            <Route exact path="/gang-madrinhal" component={GangMadrinhalPage} />
            <Route exact path="/padrinho" component={BrevementePage} />
            <Route exact path="/casamento" component={CasamentoPage} />
            <Route exact path="/estadia" component={EstadiaPage} />
            <Route exact path="/sugestoes" component={SugestoesPage} />
            <Route exact path="/fotos" component={FotosPage} />
            <Route exact path="/contactos" component={ContactosPage} />
            <Route exact path="/rsvp" component={BrevementePage} />
            <Route component={NotFoundPage} />
        </Switch>;
    }
}

export default hot(module)(App);