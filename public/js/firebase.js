let firebaseConfig = {
    apiKey: "AIzaSyCFqXNIb53GP2vxnwKTPh7gusSpmFEbFp8",
    authDomain: "towasoweb.firebaseapp.com",
    projectId: "towasoweb",
    storageBucket: "towasoweb.appspot.com",
    messagingSenderId: "650950080209",
    appId: "1:650950080209:web:2f7b04b261b193c6c2b7f0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}