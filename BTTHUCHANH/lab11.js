const express = require('express');
const app = express();

// Định nghĩa các tỷ giá chuyển đổi
const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
};

// Route xử lý yêu cầu chuyển đổi ngoại tệ
app.get('/convert', (req, res) => {
  const { amount, from, to } = req.query;
a
  if (!amount || !from || !to) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  if (!exchangeRates[from] || !exchangeRates[to]) {
    return res.status(400).json({ error: 'Invalid currency' });
  }

  const convertedAmount = amount * (exchangeRates[to] / exchangeRates[from]);

  res.json({ amount: convertedAmount, currency: to });
});

// Khởi chạy server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
