const express = require('express');
const app = express();

app.get('/calculate/:operator/:num1/:num2', (req, res) => {
    const operator = req.params.operator;
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
  
    switch (operator) {
      case 'add':
        sum = num1 + num2;
        res.json({ result: sum });
        break;
      case 'subtract':
        sub = num1 - num2;
        res.json({ result: sub });
        break;
      case 'multiply':
        mul = num1 * num2;
        res.json({ result: mul });
        break;
      case 'divide':
        if (num2 === 0) {
          res.send('Cannot divide by zero');
        } else {
          div = num1 / num2;
          res.json({ result: div });
        }
        break;
      default:
        res.send('Invalid operator');
    }
  });
  app.use(express.static('public'));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });