module.exports = (req, res, test) => {
    const testData = req.body.testData;

    if (typeof testData === 'undefined') {
        return res.status(500).send('Error - Missing testData');
    }

    const testResult = test(testData);

    res.send(testResult);
};