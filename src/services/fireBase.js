import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCZ8sPeXX9Cxp4uZ2bsb9lGEWM0u07XWC8",
    authDomain: "react-native-todo-bb8ae.firebaseapp.com",
    databaseURL: "https://react-native-todo-bb8ae.firebaseio.com",
    projectId: "react-native-todo-bb8ae",
    storageBucket: "react-native-todo-bb8ae.appspot.com",
    messagingSenderId: "712995788113",
    appId: "1:712995788113:web:f7b4fabcec37f78f242f70",
    measurementId: "G-FBEZRHK2ST"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().collection('users')
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase
