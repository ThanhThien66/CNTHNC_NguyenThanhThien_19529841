const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Thiết lập mã hóa ký tự thành UTF-8
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const currentDateStr = `${day}/${month}/${year}`;
  res.end(`Ngày hôm nay: ${currentDateStr}`);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});