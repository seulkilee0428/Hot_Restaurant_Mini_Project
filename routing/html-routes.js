var path = require('path');


module.exports = function (app) {

    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname + './tables.html'));
    });

    app.get('/reservation', function (req, res) {
        res.sendFile(path.join(__dirname + './reservation.html'));
    });

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + './home.html'));
    });

} 