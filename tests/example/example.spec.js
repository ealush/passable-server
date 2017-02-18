const chai = require('chai'),
    expect = chai.expect;

const test = require('./example.test').needfulThings,
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
        expect(testResult.testsPerformed).to.have.deep.property('MrBeauregard.failCount', 0);
    });

    it('Should pass ExampleTestTwo', () => {
        expect(testResult.testsPerformed).to.have.deep.property('Snuffles.failCount', 0);
    });

    it('Should fail ExampleTestThree', () => {
        expect(testResult.testsPerformed).to.have.deep.property('Pilot.failCount', 1);
    });
});