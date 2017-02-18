const exampleTest = require('../tests').example;

module.exports = app => {

    app.post('/example/needful_things', exampleTest.needfulThings);

    app.post('/example/curse_purge_plus', exampleTest.cursePurgePlus);
}