const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const currentDateStr = `${day}/${month}/${year}`;
  res.end(`<h1>Ngay hom nay: ${currentDateStr}</h1>`);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});