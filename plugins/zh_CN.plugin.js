/**
 * zh_CN Plugin
 */

const logger = require('../services/logging.service').getLogger('superscript/zh_CN.plugin')

/**
 * Append lang_code and pos_chinese into Message Response.
 */
exports.checkMessageFeatures = async function (cb) {
    logger.info('checkMessageFeatures', this.message)

    cb(null, {
        lang_code: this.message.lang_code,
        nlp_chinese: this.message.nlp_chinese
    })
}