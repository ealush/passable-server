const Passable = require('passable');

const needfulThings = (testData) => Passable('NeedfulThings', (pass, enforce) => {
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

const cursePurgePlus = (testData) => {

    const exampleTest = Passable('CursePurgePlus', (pass, enforce) => {
        pass('GetSchwifty', 'Should say "Show me what you got"', () => (
            testData.GetSchwifty.say === 'Show me what you got'
        ));
        pass('RickSanchez', 'Should be in great pain.', () => (
            testData.RickSanchez.shout === 'Wubba lubba dub-dub!'
        ));
        pass('BlipsAndChitz', 'Should play "Roy2"', () => (
            testData.BlipsAndChitz.game === 'Roy2'
        ));
    });

    return exampleTest;
};

module.exports = {
    needfulThings,
    cursePurgePlus
};