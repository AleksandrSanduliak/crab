let admin = require("firebase-admin");

let serviceAccount = require("./dbinfo.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crabsystem-fbdaa-default-rtdb.europe-west1.firebasedatabase.app"
});
const dbs = admin.firestore()

module.exports = {dbs}