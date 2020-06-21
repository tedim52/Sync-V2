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
const createSync = async function(userTwo) {
//TODO: Write create sync algorithm
  var authUserSongs = [];
  var userTwoSongs = [];
  var authUserTracks = await spotifyApi.getMySavedTracks({
    limit:50,
    offset:0
  }).catch(err => console.log(err));
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
