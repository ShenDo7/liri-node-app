// Node Modules

let axios = require("axios")
let moment = require("moment")
let band = require("./Bands.js");
let spotify = require("./Spotify.js")
let omdb = require("./omdb.js")


let inquirer = require("inquirer")
// Local Files


let initialize = () =>{
   inquirer
 .prompt([
   /* Pass your questions in here */
   {type: "list",
   name: "choice",
   message: "welcome to liri what function would you like to use?",
   choices: ["Bands", "omdb", "Spotify","Get Me outta here"]}
 ])
 .then(answer => {
     console.log(answer)
     if(answer.choice == "Bands"){
         inquirer
         .prompt({
             type: "input",
             name: "band",
             message: "What artist/band would you like to search for?"
         }).then(res => {
            band(res.band)
            setTimeout(initialize, 3000)
         })
     }else if(answer.choice == "Spotify"){
        inquirer
        .prompt([
          /* Pass your questions in here */
          {type: "list",
          name: "choice",
          message: "What would you like to search for with Spotify?",
          choices: ["artist", "album", "track"]},
          {type: "input",
          name: "term",
          message: "Please type in search term"}
        ]).then( response =>{
            spotify(response)
            setTimeout(initialize, 3000)
        })
      }else if(answer.choice == "omdb"){
        inquirer
        .prompt({
            type: "input",
            name: "movie",
            message: "What movie would you like to search for?"
        }).then(ans => {
           omdb(ans.omdb)
           setTimeout(initialize, 3000)
        }).catch(err => console.log(err))
     }else if(answer.choice == "Get Me outta here"){
         throw "See you next time!"
     }
   // Use user feedback for... whatever!!
 }).catch(err => console.log(err))
 ; 
}

initialize()
