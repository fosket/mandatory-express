const express = require('express');

const route = express.Router();

route.use('/api', require('./product'));
route.use('/api', require('./posts'));              //Uppgift 1 exporterar posts

module.exports = route;