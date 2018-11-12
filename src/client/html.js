const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="/bundle.css">
    </head>
    <body style="margin:0">
      <div id="main">${body}</div>
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
`;

export default Html;