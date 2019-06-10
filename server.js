const express = require("express");
const bodyParser = require("body-parser");

const images = require("./routes/images");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api", images);

app.listen(port, function() {
    console.log("Server started on port " + port);
})