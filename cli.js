#!/usr/bin/env node


/* color cli commandsline npm install cli-color
https://github.com/IonicaBizau/tilda
 */


"use strict";

const Tilda = require("tilda")

let parser = new Tilda(`${__dirname}/package.json`)

parser.action({
    name: "gitlist"
  , desc: "Starts the app."
  , description: "Gitlist.io OS - Open Source Gitlist App"
  , documentation: "https://github.com/SpaceG/gitlist.io"
    , examples: [
        "gitlist'Hello there!'"
      , "gitlist --help"
      , "gitlist - list the App on localhost 127.0.0.1"
    ]
});





/* color cli commandsline npm install cli-color
https://github.com/medikoo/cli-color
 */
/* tilda.js from Ionica Bizau
https://github.com/IonicaBizau/tilda
 */

var clc = require('cli-color');
var msg = clc.xterm(39).bgXterm(236);
console.log(msg('Welcome to Gitlist'));

parser.on("lift", action => {

        console.log("Start The GITLIST App");
        console.log("To see your app. visit:");
        console.log(clc.xterm(39).bgBlack.underline('http://127..0.0.1'));
        console.log("To Clone the Repository and Open Source:");
        console.log(clc.xterm(39).bgBlack.underline('http://www.github.com/spaceg/github.io'));

        console.log("©.2016 by Gitlist OS");
        console.log("press c to stop the app");



/* gitlist app
https://github.com/SpaceG/gitlist.io
 */


var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  console.log("The Gitlist App reload the Site/Page")
  console.log("This is another console log.")


  response.end();
}).listen(80,"127.0.0.1");


/*  sails.lift(rc('sails'));*/





});



