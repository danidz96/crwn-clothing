import { useEffect } from 'react';
import { auth, createUserProfileDocument } from '../firebase/utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../redux/user/userSlice';
import { selectCurrentUser } from '../redux/user/selector/index';

export const useAuth = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  console.log(currentUser);
  return currentUser;
};
