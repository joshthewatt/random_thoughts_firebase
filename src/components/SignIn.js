import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../App';

const SignIn = () => {  
    const signInWithGoogle = () => {      
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
        console.log("Error with login: ", {error});
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    };  
    return(
      <div>
        <button onClick={signInWithGoogle}> Sign in with Google </button>
      </div>
    )
  };

export default SignIn;