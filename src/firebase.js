// v9はここからimportする
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCm-mihO1UfgCFtKuD2LqktzGNfxEVZgY8",
    authDomain: "line-clone-cbf99.firebaseapp.com",
    projectId: "line-clone-cbf99",
    storageBucket: "line-clone-cbf99.appspot.com",
    messagingSenderId: "453521879821",
    appId: "1:453521879821:web:390adfa3553f638465b644"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

// どのファイルでもこの変数を使用する事ができるようになる。
export {db, auth}
