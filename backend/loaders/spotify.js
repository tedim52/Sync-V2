/**
* @fileoverview Setup Spotify Web Api useing app credentials.
* @author tediMitiku <tbm42@cornell.edu>
*/
const SpotifyWebApi = require('spotify-web-api-node');
const db = require('../db/database');
const User = require('../db/models').User;

/**
* Spotify Web Api instance following client credentials flow.
* @module
*/
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

const fetchToken = async () => {
  const [tedi, created] = await User.findOrCreate({
    where: {
      username: "tedi.m52",
      spotifyId: "tedi.m52",
      email: "tedi.m52@gmail.com"
    }
  });
  accessToken = await tedi.accessToken;
  return accessToken;
}

module.exports = { spotifyApi: spotifyApi, fetchToken: fetchToken };
