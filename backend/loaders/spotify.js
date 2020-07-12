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
<<<<<<< HEAD
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})
=======
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713

module.exports = spotifyApi;
