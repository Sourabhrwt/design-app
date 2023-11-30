// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK1quqgPupWyhICqddwACcuUyouZlnoEs"
  ,
  authDomain: "design-appp.firebaseapp.com",
  projectId: "design-appp",
  storageBucket: "design-appp.appspot.com",
  messagingSenderId: "330039579103",
  appId: "1:330039579103:web:70efd882314076c8c4746a"
};

// Initialize Firebase\

let app
if(firebase.default.apps.length === 0){
    app = firebase.default.initializeApp(firebaseConfig);
}else{
    app =  firebase.default.app()
}

export const auth = firebase.default.auth
export const  fb = firebase
// export const auth = firebase.default.auth(app)
// export const googleProvider = new firebase.default.auth.GoogleAuthProvider()

// export {auth}