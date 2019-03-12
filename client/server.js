const express = require('express');
const serveStatic = require("serve-static")
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '3mb' }));
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);