const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compose = require('compose-middleware').compose

const server = express();
server.use(compose([logger, cors, helmet]));

module.exports = server;