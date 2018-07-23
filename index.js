const albums = require('./discography');

albums.studio.forEach((album, i) => {
  console.log(`${i+1}. ${album.name} - ${album.released.year} - ${album.songs.length} songs`);
});