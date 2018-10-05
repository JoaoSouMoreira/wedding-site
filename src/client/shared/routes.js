import HomePage from '../../pages/home';
import ViajarPage from '../../pages/viajar';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/viajar',
        component: ViajarPage,
    },
]

export default routes;