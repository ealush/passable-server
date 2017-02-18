const express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(config.port, () => {
    console.log('Server listening at port %d', config.port);
});

require('./routes')(app);