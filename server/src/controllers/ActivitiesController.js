const { Activity } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	async index(req, res) {
		try {
			let activities = null;
			const search = req.query.search;

			//return search query if search initialised else return activities
			if (search) {
				activities = await Activity.findAll({
					where: {
						[Op.or]: [ 'title' ].map((key) => ({
							[key]: {
								[Op.like]: `%${search}%`
							}
						}))
					}
				});
			} else {
				activities = await Activity.findAll({
					limit: 10
				});
			}

			res.send(activities);
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to fetch the activities'
			});
		}
	},
	async show(req, res) {
		try {
			const activity = await Activity.findByPk(req.params.activityId);
			res.send(activity);
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to fetch the activities'
			});
		}
	},
	async post(req, res) {
		try {
			const activity = await Activity.create(req.body);
			res.send(activity);
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to create the activity'
			});
		}
	},
	async put(req, res) {
		try {
			const activity = await Activity.update(req.body, {
				where: {
					id: req.params.activityId
				}
			});
			res.send(req.body);
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to update the activity'
			});
		}
	}
};
