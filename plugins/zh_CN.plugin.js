/**
 * zh_CN Plugin
 */

const debug = require('debug')('ss-spa:plugin:zh');

/**
 * Append lang_code and pos_chinese into Message Response.
 */
exports.checkMessageFeatures = async function (cb) {
    debug('checkMessageFeatures', this.message)

    cb(null, {
        lang_code: this.message.lang_code
    })
}