import { useState, useEffect } from 'react';
import { auth } from '../firebase/utils/firebase';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return currentUser;
};
