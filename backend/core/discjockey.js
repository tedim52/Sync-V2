/**
* @fileoverview Main algorithm for creating synced playlist between users.
* @author tediMitiku <tbm42@cornell.edu>
*/

const spotifyApi = require('../loaders/spotify');

/**
* Creates sync between two spotify users.
* @param {string} userTwo - Spotify account user whats to sync with.
* @return {JSON} - A JSON object of track ids.
*/

const createSync = async function(userId) {
//TODO: Write create sync algorithm
console.log("Getting user tracks")
  var authUserTracks = await spotifyApi.getMySavedTracks({
    limit:50,
    offset:0
  }).catch(err => console.log(err));
  console.log(authUserTracks)
  var holdBody = await authUserTracks.body.items;
  var authUserSongNames = [];
  holdBody.forEach(async function(track) {
    console.log(track);
    var song = await track.track.name;
    console.log(song);
    authUserSongNames.push(song);
  });
  return authUserSongNames;
}

module.exports = createSync;
