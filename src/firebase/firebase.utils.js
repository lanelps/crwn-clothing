import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBj_BbEskWCK7h-lkMMxg5FzWRz7CMtZ0M",
  authDomain: "crwn-clothing-2d30f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-2d30f.firebaseio.com",
  projectId: "crwn-clothing-2d30f",
  storageBucket: "crwn-clothing-2d30f.appspot.com",
  messagingSenderId: "412920382714",
  appId: "1:412920382714:web:645a6cd879c938e57df543",
  measurementId: "G-3QK5GMQ0SQ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

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
