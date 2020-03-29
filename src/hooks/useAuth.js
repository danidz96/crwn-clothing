import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../firebase/utils/firebase';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      createUserProfileDocument(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return currentUser;
};
