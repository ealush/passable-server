module.exports = (app, express) => {
    app.use(express.static('build'));

    require('./example')(app);

    app.use('*', (req, res) => {
        res.status(404).send('Test Not Found');
    });
};