import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Main from './client/main';
import Html from './client/html';

const port = 3000;
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {

  const body = renderToString(<Main />);
  const title = 'Isabel & Joao';

  res.send(
    Html({
      body,
      title
    })
  );
});

server.listen(port, () => process.send && process.send("online"));
console.log(`Serving at http://localhost:${port}`);