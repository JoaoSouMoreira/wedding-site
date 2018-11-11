const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="/bundle.css">
    </head>
    <body style="margin:0">
      <div id="main">${body}</div>
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
`;

export default Html;