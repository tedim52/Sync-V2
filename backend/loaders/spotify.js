/**
* @author tediMitiku <tbm42@cornell.edu>
*/
require('dotenv').config();
var SpotifyWebApi = require('spotify-web-api-node');

/**
* Spotify Web Api instace.
* @module
*/
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.client_id,
  clientSecret: process.env.client_secret
});

module.exports = spotifyApi;
