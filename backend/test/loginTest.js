/**
* @fileoverview Tests for login and authentication logic and integration.
* @author tediMitiku <tbm42@cornell.edu>
*/
const assert = require('chai').assert;
const app = require('../index');
const { spotifyApi, fetchToken } = require("../loaders/spotify");
const db = require("../db/database");
