'use strict'

module.exports = {
  superscript: {
    factSystem: {
      clean: true
    },
    importFile: './data.json',
    mongoURI: 'mongodb://mongodb/SuperScriptSPA',
    pluginsPath: `${process.cwd()}/plugins`
  },
  logLevel: 'ERROR'
}
