var admin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
var serviceAccount = require("../service/serviceKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://artstagram-p1-default-rtdb.firebaseio.com",
});

module.exports = admin;
