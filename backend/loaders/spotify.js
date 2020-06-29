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
<<<<<<< HEAD
var spotifyApi = new SpotifyWebApi({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.API_REDIRECT_URI
=======
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.client_id,
  clientSecret: process.env.client_secret
>>>>>>> df6e367303332128a6f4f0e7b79ef023de9343a7
});

module.exports = spotifyApi;
