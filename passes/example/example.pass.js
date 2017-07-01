const passable = require('passable');

const needfulThings = (testData) => passable('NeedfulThings', (pass, enforce) => {
    pass('MrBeauregard', 'Should say "Marmalade is served"', () => (
        testData.MrBeauregard.says === 'Marmalade is served'
    ));

    pass('Snuffles', 'Should ask "Where are my testicles, Summer?"', () => (
        testData.Snuffles.asks === 'Where are my testicles, Summer?'
    ));

    pass('Pilot', 'Should not trigger "Neutrino Bomb"', () => (
        testData.Pilot.trigger !== 'Neutrino Bomb'
    ));
});

module.exports = needfulThings;