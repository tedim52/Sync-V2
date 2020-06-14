require('dotenv').config();
var SpotifyWebApi = require('spotify-web-api-node');

//Spotify API Config
var spotifyApi = new SpotifyWebApi({
  clientId: '06a9536a0f5643baa4b9a0da836ef0b3',//process.env.client_id
  clientSecret: '971c2ea3a9884b8294c1e53c241d0c50'//process.env.client_secret
});

module.exports = spotifyApi;
