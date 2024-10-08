import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR, BGIMG } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignInForm = () => {
      setSignInForm(!isSignInForm);
  };

  const handleOnSubmit = () => {
      const emailValue = email.current.value;
      const passwordValue = password.current.value;
      const nameValue = isSignInForm ? null : name.current.value;

      const message = checkValidData(emailValue, passwordValue, nameValue);
      setErrorMessage(message);

      if(message)
      return;

      if(!isSignInForm){
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
      }else{
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: AVATAR
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL} ));
    }).catch((error) => {
      setErrorMessage(error.message)
    });
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
      }
  };

  return (
      <div>
          <Header />
          <div className='absolute'>
              <img src={BGIMG} alt="logo" />
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
              <h1 className='font-bold text-center text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700' />)}
              <input ref={email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700' />
              <input ref={password} type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700' />
              <p className='text-red-600'>{errorMessage}</p>
              <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleOnSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
              <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now!" : "Already registered? Sign In Now"}</p>
          </form>
      </div>
  );
};

export default Login;
