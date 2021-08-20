import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDB0a4UfHtqHyTuC1LxCJJs-ZEQ_L0tsW0",
    authDomain: "fir-37437.firebaseapp.com",
    projectId: "fir-37437",
    storageBucket: "fir-37437.appspot.com",
    messagingSenderId: "1012958886446",
    appId: "1:1012958886446:web:d373e05bba9b73b6d8bdbf",
    measurementId: "G-3Y9FTK016X"
  };

  export default firebase.initializeApp(firebaseConfig)