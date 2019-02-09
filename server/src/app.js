const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");
var FS = require('fs');

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app)

//clear tables with force: true (developent only)
// sequelize.sync({force: true}).then(() => {
sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server has started on ${config.port}`);
});
