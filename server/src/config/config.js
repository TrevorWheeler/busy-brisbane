
module.exports = {
	port: process.env.PORT || 8081,
	db: {
		database: process.env.DB_NAME || 'vexlpscv',
		user: process.env.DB_USER || 'vexlpscv',
		password: process.env.DB_PASS || 'password',
		options: {
			dialect: process.env.DIALECT || 'postgres',
			host: process.env.HOST || 'isilo.db.elephantsql.com',
			operatorsAliases: false
		}
	},

	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
};
