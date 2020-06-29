/**
* @fileoverview Setup Spotify Web Api useing app credentials.
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');

/**
* Spotify Web Api instance following client credentials flow.
* @module
*/
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.client_id,
  clientSecret: process.env.client_secret
});

module.exports = spotifyApi;
