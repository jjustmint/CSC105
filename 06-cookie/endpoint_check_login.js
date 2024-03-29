const mysql = require("mysql2");
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	const token = req.cookies.user;

	var decoded = jwt.verify(token, "msdkfoefkjidfe");
	console.log(decoded);

	if (decoded) {
		res.json({
			success: true,
			message: "User is logged in with ID: " + decoded.userId,
		});
	} else {
		res.json({
			success: false,
			message: "User is not logged in",
		});
	}
};
