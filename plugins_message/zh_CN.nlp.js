/**
 * zh_CN Segmenter
 * http://wooorm.com/franc/
 * https://github.com/wooorm/franc/tree/master/packages/franc-all
 */
const franc = require('franc');
const superagent = require("superagent");
const config = require('../config/environment');
const debug = require('debug')('ss-spa:zh_CN.nlp');
const hanlpclient = require('hanlp-client');


const addCNWords = async function addCNWords(cb) {
    debug('this.message', this.message.clean)
    let result = franc(this.message.clean, { minLength: 1 });
    this.message.lang_code = result
    if (result === 'cmn') {
        let nlpData = hanlpclient.combine({
            type: 'nlp',
            num: 2,
            content: this.message.clean
        })

        debug('nlpData', nlpData)

        // resolve wordTags
        this.message.entities = nlpData.entities;
        // this.message.names = []
        // this.message.words = []
        this.message.nouns = nlpData.nouns;
        this.message.adverbs = nlpData.adverbs;
        this.message.verbs = nlpData.verbs;
        this.message.adjectives = nlpData.adjectives;
        this.message.pronouns = nlpData.pronouns;
        cb();
    } else {
        cb();
    }
};


exports = module.exports = {
    addCNWords: addCNWords
}