import compression from 'compression';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './client/app';
import Html from './client/html';

const port = 3000;
const server = express();

server.use(express.static('public'));
server.use(compression());

server.get('*', (req, res) => {

  const body = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );
  const title = 'Isabel & Joao';

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(
    Html({
      body,
      title
    })
  );
});

server.listen(port, () => process.send && process.send("online"));
console.log(`Serving at http://localhost:${port}`);