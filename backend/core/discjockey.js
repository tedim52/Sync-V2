/**
* @fileoverview Main algorithm for creating synced playlist between users.
* @author tediMitiku <tbm42@cornell.edu>
*/

const spotifyApi = require('../loaders/spotify');

/**
* Creates sync between two spotify users.
* @param {string} otherUser - Spotify account user whats to sync with.
* @return {Array} - An Array of strings with song names.
*/
const createSync = async function(otherUser) {
  try {
    //Get names of both spotify users
    const authUserData = await spotifyApi.getMe();
    const authUsername = await authUserData.body.display_name
    const otherUsername = otherUser;

    //Get songs from both users music libraries
    const [authUserSongs, otherUserSongs] = await Promise.all([getSongs(authUsername),
                                                                 getSongs(otherUsername)]);
    //Take intersection of song lists
    const sync = await intersection(authUserSongs, otherUserSongs);
    return sync;
  } catch(e) {
    console.log(e);
  }
}

/**
* Gets every song from all the playlists in spotify users account.
* @param username - Spotify user to retrieve songs from.
* @return {Array}  - An Array of strings with song names.
*/
const getSongs = async function(username){
  try {
    let userSongs = [];
    const userPlaylistsJSON = await spotifyApi.getUserPlaylists(username);
    const userPlaylists = await userPlaylistsJSON.body.items;
    const songLists = await Promise.all(userPlaylists.map(async ({id})=> getPlaylistSongs(id)));
    songLists.forEach(playlist => {
      userSongs = userSongs.concat(playlist);
    });
    return userSongs;
  } catch(e) {
    console.log(e);
  }
}

/**
* Gets every song in a playlist.
* @param playlistId - Spotify id of playlist to get songs from.
* @return {Array}  - An Array of strings with names of songs in the playlist.
*/
const getPlaylistSongs = async function(playlistId) {
  try {
    let songs = [];
    const tracksJSON = await spotifyApi.getPlaylist(playlistId);
    const tracks = await tracksJSON.body.tracks.items;
    const trackList = await Promise.all(tracks.map(async ({track})=> songs.push(track.name)));
    return songs;
  } catch(e) {
    console.log(e);
  }
}

const intersection = async function(listOne, listTwo) {
  let sync = listOne.filter(e => listTwo.includes(e));
  return sync;
}


module.exports = createSync;
