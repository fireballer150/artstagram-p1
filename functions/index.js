const functions = require("firebase-functions");
const clientAPI = require("./router/client");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.clientAPI = functions.https.onRequest(clientAPI);
