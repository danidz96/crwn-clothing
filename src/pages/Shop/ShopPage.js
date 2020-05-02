import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import { updateCollections } from '../../redux/shop/shopSlice';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/utils/firebase';

const ShopPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      <Route exact path="/shop">
        {isLoading ? 'Loading...' : <CollectionsOverview />}
      </Route>
      <Route path="/shop/:collectionId">
        {isLoading ? 'Loading...' : <CollectionPage />}
      </Route>
    </>
  );
};

export default ShopPage;
