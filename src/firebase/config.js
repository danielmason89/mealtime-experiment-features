import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCIGTXR9tzWdQG2m395Jzg1fFqhNPT1GA",
  authDomain: "mealtime-experiment-features.firebaseapp.com",
  projectId: "mealtime-experiment-features",
  storageBucket: "mealtime-experiment-features.appspot.com",
  messagingSenderId: "335095242018",
  appId: "1:335095242018:web:c28600cbc5b08846a6197b",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();

export { projectFirestore };
