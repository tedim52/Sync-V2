/**
* @fileoverview Main algorithm for creating synced playlist between users.
* @author tediMitiku <tbm42@cornell.edu>
*/

const spotifyApi = require('../loaders/spotify');

/**
* Creates sync between two spotify users.
* @param {string} otherUser - Spotify account user whats to sync with.
* @return {Array} - An Array of JSON objecs with song names and spotify ids.
*/
<<<<<<< HEAD

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
=======
const createSync = async function(otherUser) {
  try {
    //Get names of both spotify users
    let authUserData = await spotifyApi.getMe();
    let authUsername = await authUserData.body.display_name;
    let otherUsername = otherUser;

    //Get songs from both users music libraries
    let [authUserSongs, otherUserSongs] = await Promise.all([getSongs(authUsername),
                                                                 getSongs(otherUsername)]);
    //Take intersection of song lists
    let sync = await intersection(authUserSongs, otherUserSongs);
    return sync;
  } catch(e) {
    console.log(e);
  }
}

const getSongs = async function(username){
  try {
    let userSongs = [];
    let userPlaylistsJSON = await spotifyApi.getUserPlaylists(username);
    let userPlaylists = await userPlaylistsJSON.body.items;
    let songLists = await Promise.all(userPlaylists.map(async ({id})=> getPlaylistSongs(id)));
    songLists.forEach(playlist => {
      userSongs = userSongs.concat(playlist);
    });
    return userSongs;
  } catch(e) {
    console.log(e);
  }
}

const getPlaylistSongs = async function(playlistId) {
  try {
    let songs = [];
    let tracksJSON = await spotifyApi.getPlaylist(playlistId);
    let tracks = await tracksJSON.body.tracks.items;
    let trackList = await Promise.all(tracks.map(async ({track})=> songs.push(track.name)));
    return songs;
  } catch(e) {
    console.log(e);
  }
}

const intersection = async function(listOne, listTwo) {
  let sync = listOne.filter(e => listTwo.includes(e));
  return sync;
>>>>>>> df6e367303332128a6f4f0e7b79ef023de9343a7
}

module.exports = createSync;
