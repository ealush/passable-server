module.exports = app => {
    require('./example')(app);

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/../static/index.html')
    });

    app.use('*', (req, res) => {
        res.status(404).send('Test Not Found')
    });
};