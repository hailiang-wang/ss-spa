'use strict';

const PeerServer = require('peer').PeerServer;
const Koa = require('koa');
const serve = require('koa-static')
const Topics = require('./public/src/Topics.js');
const app = new Koa();
const path = require('path');
const figlet = require('figlet')
const port = process.env.PORT || 3001;
const logger = require('./services/logging.service').getLogger('app')

app.use(serve(path.join(__dirname, '/public')))

const httpServer = app.listen(port, function () {
  figlet('SS SPA', function (err, data) {
    logger.info(`            
${data}
=============== Powered by SuperScript ============
--------https://github.com/Samurais/ss-spa --------

I'm a bot, my super power is talk.
___________________________________________________

Hope you like it, and you are very welcome to
upgrade me for more super powers!
`)
    logger.info('Sphinx Test Client Listening on port', port)
  })
})
const io = require('socket.io').listen(httpServer);


/**
 * Process Socket Event
 * https://nodesource.com/blog/understanding-socketio/
 */
io.on('connection', function (socket) {
  socket.on('client:server', function (data) {
    logger.debug('socket.io', 'client:server', data)
  })
});

const peerServer = new PeerServer({ port: 9000, path: '/chat' });

peerServer.on('connection', function (id) {
  io.emit(Topics.USER_CONNECTED, id);
  logger.info('User connected with #', id);
});

peerServer.on('disconnect', function (id) {
  io.emit(Topics.USER_DISCONNECTED, id);
  logger.info('With #', id, 'user disconnected.');
});
