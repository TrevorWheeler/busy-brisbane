const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
	res.write('<h1><marquee direction=right>Welcome to Busy Brisbane API. Enjoy your day :)</marquee></h1>')
	res.end()
})

require('./routes')(app);

app.get('*', (req, res) => {
	res.redirect('/')
})
//clear tables with force: true (developent only)
sequelize.sync({ force: false }).then(() => {
	app.listen(config.port);
	console.log(`Server has started on ${config.port}`);
});
