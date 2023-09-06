const express = require('express');
const greetMiddleware = require('./greet.js');
express()
 .use('/api/v1/', greetMiddleware({ greeting:'Hello world' }))
 .listen(8080);