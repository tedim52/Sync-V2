require('dotenv').config();
var SpotifyWebApi = require('spotify-web-api-node');

//Spotify API Config
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.client_id,
  clientSecret: process.env.client_secret
});

module.exports = spotifyApi;
