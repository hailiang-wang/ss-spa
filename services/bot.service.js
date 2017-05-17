/**
 * Engine Brain
 */

const ROOT = '..'
const superscript = require('superscript').default
const debug = require('debug')('ss-spa:service:bot')

function BotService() {
    this.bot = null
}

BotService.prototype.init = function (options) {
    return new Promise((resolve, reject) => {
        superscript.setup(options, (err, botinstance) => {
            if (err) {
                reject(err)
            } else {
                debug('BotService is started.')
                this.bot = botinstance
                resolve()
            }
        })
    })
}

BotService.prototype.reply = function (userId, message) {
    return new Promise((resolve, reject) => {
        if (this.bot) {
            debug('userId', userId, 'message', message)
            this.bot.reply(userId, message, (err, result) => {
                if (err) return reject(err)
                resolve(result)
            })
        } else {
            reject('Not init.')
        }
    })
}

BotService.prototype.directReply = function (userId, topicId, topicQuestionId) {
    return new Promise((resolve, reject) => {
        if (this.bot) {
            debug('userId: ', userId, ' topicId: ', topicId, ' topicQuestionId: ', topicQuestionId)
            this.bot.directReply(userId, topicId, topicQuestionId, (err, result) => {
                if (err) return reject(err)
                resolve(result)
            })
        } else {
            reject('Not init.')
        }
    })
}

exports = module.exports = new BotService()
