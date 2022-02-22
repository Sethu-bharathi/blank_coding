import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const signup = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userdetails) => {
      const user = userdetails.user;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export default signup;
