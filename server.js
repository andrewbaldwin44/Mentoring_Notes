'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

const {
  renderPage,
  renderNotes,
  handleFourOhFour,
} = require('./_server/handlers');

app
.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
.use(morgan('dev'))
.use(express.static('public'))
.use(bodyParser.json())
.use(express.urlencoded({extended: false}))
.set('view engine', 'ejs')

.get('/', (req, res) => renderPage(req, res, 'index'))
.get('/javascript', (req, res) => renderNotes(req, res, 'javascript'))
.get('/ruby', (req, res) => renderNotes(req, res, 'ruby'))
.get('/python', (req, res) => renderNotes(req, res, 'python'))
.get('*', handleFourOhFour)

.listen(PORT, () => console.log(`Listening on port ${PORT}`));
