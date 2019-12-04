import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCsup-SQ8aWCXB6Hp4k4kerOpEma9E5-Oc",
  authDomain: "crwn-db-24600.firebaseapp.com",
  databaseURL: "https://crwn-db-24600.firebaseio.com",
  projectId: "crwn-db-24600",
  storageBucket: "crwn-db-24600.appspot.com",
  messagingSenderId: "704768570067",
  appId: "1:704768570067:web:9ee17e62a737b736d69a26",
  measurementId: "G-XC7GP4MLJN"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log("error creating user", err.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
