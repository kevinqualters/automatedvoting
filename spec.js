'use strict'
browser.ignoreSynchronization = true;
describe('march madness champs', function () {
    it('should win', function(){
    browser.get('http://dcinno.streetwise.co/2015/03/19/dc-inno-dctechmadness-round-2-voting-results-statistics/').then(function () {
        //element(by.id('center-flyin')).click().then(function () {
            element(by.cssContainingText('.pds-answer-span', 'Endgame (3rd seed)')).click().then(function () {

                element(by.id('pd-vote-button8738058')).click().then(function(){
                   browser.sleep(5000);
                });
            });
        //});
    });
    });
});
