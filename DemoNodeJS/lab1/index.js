const express = require('express');
const app = express();

// Đường dẫn tới thư mục chứa các tập tin tĩnh
const staticFolderPath = __dirname + '/public';

// Sử dụng middleware express.static để cung cấp các tập tin tĩnh
app.use(express.static(staticFolderPath));

// Khởi động máy chủ
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
