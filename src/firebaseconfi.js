  import firebase from 'firebase/app'
  import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyBVqrv7b7iv49nfj871KmB5N9lZCJJZVk8",
    authDomain: "burger-queen-6b2d5.firebaseapp.com",
    projectId: "burger-queen-6b2d5",
    storageBucket: "burger-queen-6b2d5.appspot.com",
    messagingSenderId: "612142673939",
    appId: "1:612142673939:web:43541bf36a4c9af4560fe6"
  };

  //INicializar firebase

 const db = firebase.initializeApp(firebaseConfig);
 const store = db.firestore();


 export {store}