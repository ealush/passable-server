const chai = require('chai'),
    expect = chai.expect;

const test = require('./example.pass'),
    testData = {
        MrBeauregard: {
            says: 'Marmalade is served'
        },
        Snuffles: {
            asks: 'Where are my testicles, Summer?'
        },
        Pilot: {
            trigger: 'Neutrino Bomb'
        }
    };

describe('Testing "example-test" behaviour', () => {
    const testResult = test(testData);

    it('Should only perform three tests', () => {
        expect(testResult.testCount).to.equal(3);
    });

    it('Should pass MrBeauregard', () => {
        expect(testResult).to.nested.include({'testsPerformed.MrBeauregard.failCount': 0});
    });

    it('Should pass Snuffles', () => {
        expect(testResult).to.nested.include({'testsPerformed.Snuffles.failCount': 0});
    });

    it('Should fail Pilot', () => {
        expect(testResult).to.nested.include({'testsPerformed.Pilot.failCount': 1});
    });
});