module.exports = (sequelize, DataTypes) => {
	const Activity = sequelize.define('Activity', {
		title: DataTypes.STRING,
		suburb: DataTypes.STRING,
		desc: DataTypes.TEXT,
		img: DataTypes.TEXT
	});

	return Activity;
};
