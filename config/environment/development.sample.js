'use strict'

module.exports = {
  parse: {
    appId: 'sphinxparse',
    serverURL: 'http://localhost:1339/parse',
    masterKey: 'foobar',
    javascriptKey: 'foobar'
  },
  superscript: {
    enque: {
      botId: 1999, // bot's id for this superscript bot. This is something unique.
      factSystem: {
        clean: true
      },
      importFile: './enque/data.json',
      mongoURI: 'mongodb://localhost/SphinxLogicDB_enque',
      pluginsPath: `${process.cwd()}/enque/plugins`
    },
    deque: {
      botId: 2000, // bot's id for this superscript bot. This is something unique.
      factSystem: {
        clean: true
      },
      importFile: './deque/data.json',
      mongoURI: 'mongodb://localhost/SphinxLogicDB_deque',
      pluginsPath: `${process.cwd()}/deque/plugins`
    }
  },
  luna: {
    baseUrl: '',
    username: '',
    password: ''
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    auth: null
  },
  logLevel: 'DEBUG'
}
