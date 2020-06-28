/**
* @fileoverview Main algorithm for creating synced playlist between users.
* @author tediMitiku <tbm42@cornell.edu>
*/

const spotifyApi = require('../loaders/spotify');

/**
* Creates sync between two spotify users.
* @param {string} userTwo - Spotify account user whats to sync with.
* @return {Array} - A JSON object of track ids.
*/
const createSync = async function(userTwo) {
//TODO: Write create sync algorithm
  /*
  var authUserSongs = [];
  var userTwoSongs = [];

  var authUserData = await spotifyApi.getMe();
  var authUserName = await authUserData.display_name;
  var userTwoName = userTwo;

  //Get auth users song library
  var authUserTracks = await spotifyApi.getMySavedTracks({
    limit:50,
    offset:0
  }).catch(err => console.log(err));

  var songObjects = await authUserTracks.body.items
  console.log(songObjects);
  songObjects.forEach(async function(track) {
    var song = await track.track.name;
    console.log(song);
    var trackId = await track.track.id;
    authUserSongs.push({name:song, spotifyId:trackId});
  });

  console.log(authUserSongs);

  //Get songs from auth users playlists

  var authUserPlaylists = await spotifyApi.getUserPlaylists(authUserName).body;
  var authUserPlaylistIds = [];

  console.log(authUserPlaylists);

  authUserPlaylists.forEach(async function(playlist) {
    var playlistId = await playlist.id;
    authUserPlaylistIds.push(playlistId);
  });
  console.log(authUserPlaylistIds);
  /*
  authUserPlaylistIds.forEach(async function(id) {
    var playlistTracks = await spotifyApi.getPlaylist(id).items;
    playlistTracks.forEach(async function(track) {
      var song = await track.track.name;
      var trackId = await track.track.id;
      authUserSongs.push({name:song, spotifyId:trackId});
    });
  });

  //Get songs from user two's playlists
  var userTwoPlaylists = await spotifyApi.getUserPlaylists(userTwo).body.items;
  var userTwoPlaylistIds = [];
  userTwoPlaylists.forEach(async function(playlist) {
    var playlistId = await playlist.id;
    userTwoPlaylistIds.push(playlistId);
  });

  userTwoPlaylistIds.forEach(async function(id) {
    var playlistTracks = await spotifyApi.getPlaylist(id).items;
    playlistTracks.forEach(async function(track) {
      var song = await track.track.name;
      var trackId = await track.track.id;
      userTwoSongs.push({name:song, spotifyId:trackId});
    });
  });

  //Take intersection of songs
  var sync = []
  sync = authUserSongs.filter(track => userTwoSongs.includes(track));
  return sync;
  */
  return { songs:["Be lazy", "Take Me to Church", "Hop Off a Jet"] };

}


module.exports = createSync;
