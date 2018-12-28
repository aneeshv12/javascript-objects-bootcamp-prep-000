var playlist = {"Kodaline":"Follow your Fire"
};

function updatePlaylist(playlist, artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist
}