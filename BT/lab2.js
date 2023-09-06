const express = require('express');
const app = express();

// Định nghĩa RoutingService
class RoutingService {
  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

// Middleware routing
const routingMiddleware = (options) => {
  const { service } = options;

  return (req, res, next) => {
    const data = service.getData();
    res.send(`Thông tin: ${data}`);
  };
};

// Sử dụng Middleware routing
app.use('/department/lecturer', routingMiddleware({
  service: new RoutingService('Tran Thi Minh Khoa'),
}));

app.use('/department/student', routingMiddleware({
    service: new RoutingService('Nguyen Thanh Thien , 19529841'),
  }));

// Khởi động máy chủ
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});