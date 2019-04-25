const express = require('express');

const mugglesRouter = require('../muggles/mugglesRouter.js');

const server = express();

server.use(express.json());

server.use('/muggles', mugglesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

module.exports = server;