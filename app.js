#!/usr/bin/env node
// Make sure that no matter where we call the command from,
// we lift the app that lives in the same directory as this script
process.chdir(__dirname);

        console.log("HELLOOOOOOOOO");
        console.log("©.2016 by Gitlist OS");

        console.log("press c to stop the app");

// Get an instance of Sails
var sails = require('sails');
// Lift the Sails app in the current working directory
sails.lift({log:{noShip: true}});