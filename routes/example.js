const exampleTest = require('../passes').example;

module.exports = (app) => {

    app.post('/example', exampleTest.needfulThings);
};