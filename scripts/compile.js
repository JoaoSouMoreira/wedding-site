import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/client/app';
import Html from '../src/client/html';
import { routes } from '../src/client/routes';

const publicDir = path.resolve(__dirname, '..', 'public');

routes.forEach((route) => {
    const fileName = route.path === '/' ? 'index.html' : route.path.replace('/', '') + '.html';
    const element = React.createElement(StaticRouter, { location: route.path, context: {}}, React.createElement(App));
    const body = renderToString(element);
    const title = 'Isabel & Joao';
    
    fs.writeFile(publicDir + '/' + fileName, Html({ body, title }), () => console.log(`Wrote file ${fileName}`));
});

