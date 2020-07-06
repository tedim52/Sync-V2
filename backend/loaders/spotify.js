/**
* @fileoverview Setup Spotify Web Api useing app credentials.
* @author tediMitiku <tbm42@cornell.edu>
*/
const SpotifyWebApi = require('spotify-web-api-node');

/**
* Spotify Web Api instance following client credentials flow.
* @module
*/
<<<<<<< HEAD
var spotifyApi = new SpotifyWebApi({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
=======
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
>>>>>>> 57c112a97ab32e86fab05d1fa4f70f3734a99ea9
});

module.exports = spotifyApi;
