'use strict'

var path = require('path')
var _ = require('lodash')

var env = process.env.NODE_ENV || 'development'
env = env.toLowerCase()

var all = {
  env: env,
  root: path.normalize(path.join(__dirname, '..', '..')),
  superscript: {
    factSystem: {
      clean: true
    },
    importFile: './data.json',
    mongoURI: 'mongodb://localhost/SuperScriptSPA',
    pluginsPath: `${process.cwd()}/plugins`,
    historyCheckpoints: 100,
    conversationTimeout: 1000 * 60 * 30 // half an hour, conversation memory timeout
  },
  logLevel: 'INFO'
}

var config = _.merge(all, require('./' + env + '.js') || {})

if (process.env.MONGO_DB_URI) {
  config.superscript.mongoURI = process.env.MONGO_DB_URI
}

console.log('configurations:', config)

module.exports = config;
