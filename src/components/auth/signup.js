import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const signup = (email, password) => {
  const auth = getAuth();
  if(email!=null && password!=null){
  createUserWithEmailAndPassword(auth, email, password)
    .then((userdetails) => {
      const user = userdetails;
      console.log(user)
      localStorage.setItem("useremail",user);
    })
    .catch((error) => {
      console.log(error.message);
    });}
    else{
      alert("Fill all the fields");
    }
};
export default signup;
