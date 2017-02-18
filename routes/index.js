module.exports = app => {
    require('./example')(app);

    app.use('*', (req, res) => {
        res.status(404).send('Test Not Found')
    });
};