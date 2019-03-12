module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		options: {
			dialect: process.env.DIALECT,
			host: process.env.HOST,
			operatorsAliases: false
		}
	},

	authentication: {
		jwtSecret: process.env.JWT_SECRET
	}
};
