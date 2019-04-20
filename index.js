const express = require("express");
const app = express();
const port = 7000;
const Pool = require("pg").Pool;

const { postgresConnectionString } = require("./config");

const pool = new Pool({
	connectionString: postgresConnectionString
});

const getUsers = (request, response) => {
	pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

app.get("/", (request, response) => {
	response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", getUsers);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
