const testRequestHandler = require('../test_request_handler');
const pass = require('./example.pass');

module.exports = {
    needfulThings: (req, res) => {
        testRequestHandler(req, res, pass);
    }
};