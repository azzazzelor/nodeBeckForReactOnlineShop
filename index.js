require('dotenv').config();

const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


app.use(cors()) 
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

config.loader(app);

app.listen(process.env.PORT || 5000); 