const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

const users = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: uuidv4(), name };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(8080, () => {
  console.log('Server đã khởi động trên cổng 8080');
});