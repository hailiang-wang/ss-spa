/**
 * zh_CN Segmenter
 * http://wooorm.com/franc/
 * https://github.com/wooorm/franc/tree/master/packages/franc-all
 */
const franc = require('franc');
const debug = require('debug')('ss-spa:zh_CN.nlp');
const hanlpclient = require('hanlp-client');


const addCNWords = async function addCNWords(cb) {
    let result = franc(this.message.clean, { minLength: 1 });
    this.message.lang_code = result
    if (result === 'cmn') {
        let nlp = await hanlpclient.combine({
            type: 'nlp',
            num: 2,
            content: this.message.clean
        })

        this.message.entities = nlp.data.entities;
        this.message.names = nlp.data.names;
        this.message.words = nlp.data.keywords;
        this.message.nouns = nlp.data.nouns;
        this.message.adverbs = nlp.data.adverbs;
        this.message.verbs = nlp.data.verbs;
        this.message.adjectives = nlp.data.adjectives;
        this.message.pronouns = nlp.data.pronouns;
        cb();
    } else {
        cb();
    }
};


exports = module.exports = {
    addCNWords: addCNWords
}