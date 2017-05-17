'use strict';

const PeerServer = require('peer').PeerServer;
const Koa = require('koa');
const config = require('./config/environment');
const serve = require('koa-static')
const Topics = require('./public/src/Topics.js');
const app = new Koa();
const path = require('path');
const figlet = require('figlet')
const port = config.node.port || 3001;
const debug = require('debug')('ss-spa:app')
const bodyParser = require('koa-bodyparser')
const bot = require('./services/bot.service')
const router = require('./routes')

app.use(serve(path.join(__dirname, '/public')))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

const httpServer = app.listen(port, function () {
  figlet('SS SPA', function (err, data) {
    console.log(`            
${data}
=============== Powered by SuperScript ============
--------https://github.com/Samurais/ss-spa --------

I'm a bot, my super power is talk.
___________________________________________________

Hope you like it, and you are very welcome to
upgrade me for more super powers!
`)
    console.log('Sphinx Test Client Listening on port', port)
  })
})
const io = require('socket.io').listen(httpServer);


/**
 * Init SuperScript
 */
bot.init(config.superscript);

/**
 * Process Socket Event
 * https://nodesource.com/blog/understanding-socketio/
 */
io.on('connection', function (socket) {
  socket.on('client:server', async function (data) {
    debug('socket.io', 'client:server', data)
    let response = await bot.reply(data.author, data.content);
    debug('Get reply from superscript', response);
    socket.emit('server:client', {
      recipient: data.author,
      response: response
    })
  })

  socket.on('wechaty:server', async function (data) {
    console.log('socket.io', 'wechaty:server', data)
    let response = await bot.reply(data.author, data.content);
    debug('Get reply from superscript', response)
    socket.emit('server:wechaty', {
      recipient: data.author,
      response: response,
      rawObj: data.rawObj
    })
  })

});

const peerServer = new PeerServer({ port: 9000, path: '/chat' });

peerServer.on('connection', function (id) {
  io.emit(Topics.USER_CONNECTED, id);
  debug('User connected with #', id);
});

peerServer.on('disconnect', function (id) {
  io.emit(Topics.USER_DISCONNECTED, id);
  debug('With #', id, 'user disconnected.');
});
