const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const db = require('../data/db-config')
const Users = require('./acc-model')
const restricted = require('../Auth/restricted-middleware')

const router = express.Router();
