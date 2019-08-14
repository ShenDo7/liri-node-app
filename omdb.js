// Axios npm package
let axios = require("axios")

// Movie variable
let omdb = (movieName) => {
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=7cd3694d";

  console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      console.log("\nRelease Year: ",  response.data[0].Year + "\nTitle: ",  response.data[0].Title); 
    })
    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

module.exports = omdb