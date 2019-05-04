var express = require("express");
var app = express();
var fs = require('fs');
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/getItems", (req, res, next) => {
    res.json(data);
});