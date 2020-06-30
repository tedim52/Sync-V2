/**
* @fileoverview Setup Spotify Web Api useing app credentials.
* @author tediMitiku <tbm42@cornell.edu>
*/
const SpotifyWebApi = require('spotify-web-api-node');

/**
* Spotify Web Api instance following client credentials flow.
* @module
*/
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

module.exports = spotifyApi;
