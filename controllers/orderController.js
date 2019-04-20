const mongoose = require("mongoose");

exports.saveOrder = (req, res) => {
	console.log(req.body);
	res.json(req.body);
	// pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
	// 	if (error) {
	// 		throw error;
	// 	}
	// 	response.status(200).json(results.rows);
	// });
};

exports.searchUser = (request, response) => {
	pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};
