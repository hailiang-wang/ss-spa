/**
 * zh_CN Plugin
 */

const debug = require('debug')('ss-spa:plugin');
const config = require('../config/environment')
const wf = require('wforecast')(config.heweatherKey);

/**
 * Append lang_code and pos_chinese into Message Response.
 */
exports.checkMessageFeatures = async function (cb) {
    debug('checkMessageFeatures', this.message)
    cb(null, {
        lang_code: this.message.lang_code
    })
}

/**
 * Get weather by city name.
 */
exports.getWeather = function (city, cb) {
    debug('getWeather by city', city)
    wf.getWeatherByCity(city)
        .then(function (result) {
            debug('getWeather', result)
            cb(null, result.comf.txt);
        }, function (err) {
            // a fallback reply.
            cb(null, "查询天气服务未开启");
        });
}