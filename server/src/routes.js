const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const ActivitiesController = require('./controllers/ActivitiesController');

module.exports = (app) => {
	app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);

	app.post('/login', AuthenticationController.login);

	app.get('/activities', ActivitiesController.index);

	app.get('/activities/:activityId', ActivitiesController.show);

	app.post('/activities', ActivitiesController.post);
	app.put('/activities/:activityId', ActivitiesController.put);
};
