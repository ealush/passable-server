const testRequestHandler = require('../test_request_handler');

module.exports = {
    needfulThings: (req, res) => {
        testRequestHandler(req, res, require('./example.test').needfulThings);
    },

    cursePurgePlus: (req, res) => {
        testRequestHandler(req, res, require('./example.test').cursePurgePlus);
    }
};