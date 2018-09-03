const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="/bundle.css">
    </head>
    <body style="margin:0">
      <div id="main">${body}</div>
      <script type="application/javascript" src="${process.env.BROWSER_REFRESH_URL}"></script>
    </body>
  </html>
`;

export default Html;