const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 7000;
const Pool = require("pg").Pool;
const { postgresConnectionString, mongoConnectionString } = require("./config");
const sequelize = require("sequelize");

const pool = new Pool({
	connectionString: postgresConnectionString
});

mongoose
	.connect(mongoConnectionString, { useNewUrlParser: true })
	.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require("./routes");
routes(app);

app.listen(port, () => console.log("server stared.."));
