module.exports = (req, res, test) => {
    const testData = req.body.testData;

    if (typeof testData === 'undefined') {
        return res.status(500).send('Error');
    }

    const testResult = test(testData);

    res.send(testResult);
};