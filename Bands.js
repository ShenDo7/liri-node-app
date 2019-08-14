// Axios npm package
let axios = require("axios")
let moment = require("moment")


let band = (term) =>{
  var queryUrl = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp&date=upcoming"

console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
      console.log()
        console.log("\nVenue: ", response.data[0].venue.name + "\nLocation: ", response.data[0].venue.city, "\nDate: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
    })
    .catch(function(error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
    } else { console.log("Error", error.message);
}
console.log(error.config);
});
}

module.exports = band
