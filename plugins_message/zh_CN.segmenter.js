/**
 * zh_CN Segmenter
 * http://wooorm.com/franc/
 * https://github.com/wooorm/franc/tree/master/packages/franc-all
 */
const franc = require('franc');
const nodejieba = require("nodejieba");
const logger = require('../services/logging.service').getLogger('message/zh_CN.plugin')


const addCNWords = function addCNWords(cb) {
    logger.info('this.message', this.message.clean)
    let result = franc(this.message.clean, { minLength: 1 });
    this.message.lang_code = result
    if (result === 'cmn') {
        this.message.pos_chinese = nodejieba.cut(this.message.clean)
    }
    cb();
};


exports = module.exports = {
    addCNWords: addCNWords
}