const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const musicRoutes = require('./routes/music');

server.use(cors());
server.use(helmet());
server.use(logger());
server.use(express.json());
server.use('/api/music', musicRoutes);
module.exports = server;