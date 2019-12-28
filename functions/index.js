const functions = require("firebase-functions");

// Firebase Setup
const admin = require("firebase-admin");
admin.initializeApp();

exports.createCustomToken = functions.https.onCall((data, context) => {
    const uid = data.uid

    return admin.auth().createCustomToken(uid)
        .catch(function(error) {
            console.log('Error creating custom token:', error);
        });
});