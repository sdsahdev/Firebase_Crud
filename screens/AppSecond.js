import React, { useState } from 'react';
import Authentication from './Authentication';
import Authenticated from './Authenticated';
import Crudscreen from './Crudscreen';
import  AllFunctions from './AllFunctions';


import { firebaseAuth } from '../firebaseConnection';


export default function AppSecond() {
  const [authenticated, setAuthenticated] = useState(false);
  const [login, setlogin] = useState(false);

  firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    }
     else {
      setAuthenticated(false);
    }
  });

  const createUser = (email, password) => {
    try {
        firebaseAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  const signin = (email, password) => {
    try {
        firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  if (authenticated) {
    return <AllFunctions />;
  }

  return <Authentication signin={signin} createUser={createUser} />;
}
