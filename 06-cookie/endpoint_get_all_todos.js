const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	const token = req.cookies.user;

	const decoded = jwt.verify(token, "msdkfoefkjidfe")

	connection.query("SELECT * FROM items WHERE owner_id = ?",[decoded.userId] ,(err, rows) => {
		// Check if cannot find the data in the database then return the error
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		} else {
			// Return data to the client if success
			return res.json({
				success: true,
				data: rows,
				error: null,
			});
		}
	});
};
