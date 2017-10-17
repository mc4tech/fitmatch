import firebase from 'firebase'

// Initialize Firebase
const config = {
apiKey: "AIzaSyDj1dbdYlwQ-rqZ43FVPEZitJ0Mr3p4JVA",
authDomain: "fitmatch-78cff.firebaseapp.com",
databaseURL: "https://fitmatch-78cff.firebaseio.com",
projectId: "fitmatch-78cff",
storageBucket: "fitmatch-78cff.appspot.com",
messagingSenderId: "905634147179"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;