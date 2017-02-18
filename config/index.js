const fs = require('fs');

const configPath = `./config/${process.env.NODE_ENV}.json`,
    config = JSON.parse(fs.readFileSync(configPath));

module.exports = config;