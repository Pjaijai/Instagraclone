import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHQCAaGQRGIRCjuJU0BD1_TzGr77EEYMU",
    authDomain: "igclone-3d1bf.firebaseapp.com",
    projectId: "igclone-3d1bf",
    storageBucket: "igclone-3d1bf.appspot.com",
    messagingSenderId: "125458108184",
    appId: "1:125458108184:web:0f8aebfa4895c87cc7d86d",
    measurementId: "G-9FE8XRH7XQ"
  })


  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const storage = firebase.storage()

  export { db , auth , storage}