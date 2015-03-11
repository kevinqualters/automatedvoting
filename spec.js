'use strict'
browser.ignoreSynchronization = true;
describe('march madness champs', function () {
    it('should win', function(){
    browser.get('http://dcinno.streetwise.co/all-series/dctechmadness-bracket-is-revealed-vote-now/').then(function () {
        element(by.id('center-flyin')).click().then(function () {
            element(by.cssContainingText('.pds-answer-span', '3 - Endgame')).click().then(function () {

                element(by.id('pd-vote-button8715144')).click().then(function(){
                   browser.sleep(5000);
                });
            });
        });
    });
    });
});