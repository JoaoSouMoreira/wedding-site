import BrevementePage from '../pages/brevemente';
import CasamentoPage from '../pages/casamento';
import ContactosPage from '../pages/contactos';
import EstadiaPage from '../pages/estadia';
import FornecedoresPage from '../pages/fornecedores';
import FotosPage from '../pages/fotos';
import GangMadrinhalPage from '../pages/gang-madrinhal';
import HistoriaPage from '../pages/historia';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/404';
import PadrinhoPage from '../pages/padrinho';
import PedidoPage from '../pages/pedido';
import PrendasPage from '../pages/prendas';
import RSVPPage from '../pages/rsvp';
import SugestoesPage from '../pages/sugestoes';
import ViajarPage from '../pages/viajar';

export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/pedido',
        component: PedidoPage,
    },
    {
        path: '/viajar',
        component: ViajarPage,
    },
    {
        path: '/nossa-historia',
        component: HistoriaPage,
    },
    {
        path: '/gang-madrinhal',
        component: GangMadrinhalPage,
    },
    {
        path: '/padrinho',
        component: PadrinhoPage,
    },
    {
        path: '/casamento',
        component: CasamentoPage,
    },
    {
        path: '/fornecedores',
        component: FornecedoresPage,
    },
    {
        path: '/estadia',
        component: EstadiaPage,
    },
    {
        path: '/sugestoes',
        component: SugestoesPage,
    },
    {
        path: '/fotos',
        component: FotosPage,
    },
    {
        path: '/contactos',
        component: ContactosPage,
    },
    {
        path: '/prendas',
        component: PrendasPage,
    },
    {
        path: '/rsvp',
        component: RSVPPage,
    },
    {
        path: '/404',
        component: NotFoundPage,
    },
]
