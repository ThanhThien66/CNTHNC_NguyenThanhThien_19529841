const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

// Đường dẫn tới thư mục chứa các tập tin tĩnh
const staticFolderPath = __dirname + '/public';

// Sử dụng middleware express.static để cung cấp các tập tin tĩnh
app.use(express.static(staticFolderPath));
// Route GET để lấy danh sách người dùng
app.get('/users', (req, res) => {
  res.json(users);
});

// Route GET để lấy một người dùng theo ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// Route POST để tạo một người dùng mới
app.post('/users', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUser = { id: Date.now(), name };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Route PUT để cập nhật thông tin một người dùng theo ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.name = name;

  res.json(user);
});

// Route DELETE để xóa một người dùng theo ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(index, 1)[0];

  res.json(deletedUser);
});

// Khởi chạy server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});