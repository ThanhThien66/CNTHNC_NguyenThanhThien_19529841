const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;
  const websiteName = url.substring(1); // Lấy tên trang web từ URL

  const websitePath = path.join(__dirname, websiteName); // Tạo đường dẫn tới thư mục trang web
  const indexFilePath = path.join(websitePath, 'index.html'); // Tạo đường dẫn tới tệp tin index.html

  fs.readFile(indexFilePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Page not found');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
