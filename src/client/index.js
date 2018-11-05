import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

PLATFORM === 'server' ?
hydrate(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('main')
) :
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('main')
);