import app from "./firebase.js"
import './App.css';
import SignupPage from "./components/screens/Signuppage.js";
// import {getFirestore} from 'firebase/firestore/lite'
// import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

function App() {
  
  return (
    <div>
      <SignupPage />
    </div>
  );
}

export default App;
