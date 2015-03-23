'use strict'

    var proxyList = [
        '111.206.81.248',
        '163.177.79.5',
        '61.184.192.42',
        '36.250.74.87',
        '120.198.243.54',
        '131.109.42.105',
        '36.250.74.87',
        '120.198.243.54'
    ];

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
  var randomProxy = getRandomArbitrary(0, proxyList.length);

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',


    capabilities: {'browserName': 'firefox',
            'proxyType': 'manual',
            'httpProxy': proxyList[randomProxy]
    },

    DEFAULT_TIMEOUT_INTERVAL: 60000,

    specs: ['spec.js'],

    framework: 'jasmine2'

}