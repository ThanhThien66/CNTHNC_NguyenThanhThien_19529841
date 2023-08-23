const express = require('express');
const app = express();

app.get('/someUri', function (req, res, next) {})

app.route('/myPath')
 .get(function (req, res, next) {})
 .post(function (req, res, next) {})
 .put(function (req, res, next) {}
app.get('/myPath', myFunction, function (req, res, next) {})