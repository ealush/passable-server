const Passable = require('passable');

const needfulThings = (testData) => new Passable('NeedfulThings', function (group, pass) {
    pass('MrBeauregard', 'Should say "Marmalade is served"', () => (
        group.enforce(testData.MrBeauregard.says, {
            equals: {
                testAgainst: 'Marmalade is served'
            }
        })
    ));
    pass('Snuffles', 'Should ask "Where are my testicles, Summer?"', () => (
        group.enforce(testData.Snuffles.asks, {
            equals: {
                testAgainst: 'Where are my testicles, Summer?'
            }
        })
    ));
    pass('Pilot', 'Should not trigger "Neutrino Bomb"', () => (
        group.enforce(testData.Pilot.trigger, {
            equals: {
                testAgainst: 'Neutrino Bomb',
                expect: false
            }
        })
    ));
});

const cursePurgePlus = (testData) => {

    const exampleTest = new Passable('CursePurgePlus', function (group, pass) {
        pass('GetSchwifty', 'Should say "Show me what you got"', () => (
            group.enforce(testData.GetSchwifty.say, {
                equals: {
                    testAgainst: 'Show me what you got'
                }
            })
        ));
        pass('RickSanchez', 'Should be in great pain.', () => (
            group.enforce(testData.RickSanchez.shout, {
                equals: {
                    testAgainst: 'Wubba lubba dub-dub!'
                }
            })
        ));
        pass('BlipsAndChitz', 'Should play "Roy2"', () => (
            group.enforce(testData.BlipsAndChitz.game, {
                equals: {
                    testAgainst: 'Roy2',
                    expect: false
                }
            })
        ));
    });

    return exampleTest;
};

module.exports = {
    needfulThings,
    cursePurgePlus
};