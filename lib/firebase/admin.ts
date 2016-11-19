const appRoot = require('app-root-path').path;

// import * as admin from 'firebase-admin';
const admin = require('firebase-admin');

require('dotenv').config();
const databaseURL = process.env.FIREBASE_DATABASE_URL;

if ([databaseURL].some(key => !key)) {
  throw new Error('Env keys for Firebase are not collected.');
}


const serviceAccount = require(appRoot + '/serviceAccountKey.json');

export const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
});
