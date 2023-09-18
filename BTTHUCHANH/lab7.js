const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const host = req.headers.host;
  const pathname = parsedUrl.pathname;
  const search = parsedUrl.search;

  console.log('Host:', host);
  console.log('Pathname:', pathname);
  console.log('Search:', search);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Check the terminal for request details');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
