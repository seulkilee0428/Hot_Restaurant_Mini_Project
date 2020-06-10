var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
var reservations = [];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.post("/api/tables", function (req, res) {
    var newres = req.body;
    console.log(newres);
    reservations.push(newres);
    res.json(newres)

});

app.get("/api/tables", function (req, res) {
    console.log(reservations);
    res.json(reservations);

});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});