var tableData = require("table-Data.js");
var waitListData = require("waitinglist-data.js");
var path = reuqire("path");

module.exports = function (app) {
    app.get('/api/tables', function (req, res) {
        res.json(tableData);
    });

    app.get('/api/waitlist', function (req, res) {
        res.json(waitListData);
    });

    app.post('/api/tables', function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }

        else {
            waitListData.push(req.body);
            res.json(false);
        }

    });
    app.post('/api/clear', function (req, res) {
        // Empty out the arrays of data
        tableData = [];
        waitListData = [];

        console.log(tableData);
    })
}
