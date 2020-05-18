# Wedding Site

Wedding website for Isabel Castanho and João Moreira.

Built using Isomorphic React. The project is split into client and server with different configurations.

## Running

### Setup

In project's directory, execute:
```
npm install
```
OR
```
yarn install
```

### Client

For development:
```
npm run client:dev
```
OR
```
yarn client:dev
```

To generate the application's assets:
```
npm run client:build
```
OR
```
yarn client:build
```

### Server

To run the node server for React SSR:
```
npm run server:prod
```
OR
```
yarn server:prod
```

To generate the prerendered static pages:
```
npm run server:build
```
OR
```
yarn server:build
```

## Client

This is mainly used for development purposes, works as any typical React application (using `react-router-dom`). The build configuration is in `config/webpack.client.config.js`.

## Server

A tiny express server that takes advantage of `express` to render the React application on the server side and spit it out to the DOM. Uses `StaticRouter` from `react-router-dom` and binds to port `3000`. The build configuration is located in `config/webpack.server.config.js`.

## Build process

The "server" build process uses `prerender-spa-plugin` to prerender all of the routes in the React application and generate static pages from it. I used this to be able to host the application anywhere that allows me to host static pages.
This project is hooked to Netlify, so whenever a new update is pushed to `master` branch in Github, it will trigger a new build and re-build all of the prerendered static pages once again.

For client building, it leverages `webpack-dev-server` for swift development, but it will also generate proper bundle files for a more typical React application.

## Localization

Because of the fact that we had guests that spoke different languages, I had to add proper localization. It took quite a bit of effort to translate all of the website's content but it works quite well. In the future I would likely use a library like `i18next` instead as it allows me to use "default strings" in place of variables so I can see exactly what is displayed in all of the templates.
