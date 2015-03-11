'use strict'
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    capabilities: {'browserName': 'firefox'},

    DEFAULT_TIMEOUT_INTERVAL: 60000,

    specs: ['spec.js'],

    framework: 'jasmine2'

}