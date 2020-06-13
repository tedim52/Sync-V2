var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId: '06a9536a0f5643baa4b9a0da836ef0b3',
  clientSecret: '971c2ea3a9884b8294c1e53c241d0c50'
});

module.export = spotifyApi;
