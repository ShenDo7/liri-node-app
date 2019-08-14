var Spotify = require('node-spotify-api');
require('dotenv').config();

let spotify =(params)=>{
    var spotify = new Spotify({
 id: process.env.SPOTIFY_ID,
 secret: process.env.SPOTIFY_SECRET,
});

spotify.search({ type: params.choice, query: params.term , limit: 1}, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }
if (params.choice === "artist"){
   console.log(data.artists.items[0]); 
}else if (params.choice === "album"){
    console.log(data.albums.items[0])
}else if (params.choice === "track"){
    console.log(data.tracks.items[0])
}
});
}

module.exports = spotify
