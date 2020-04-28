import React, { useEffect } from 'react';
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
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
    });
  }, [dispatch]);

  return (
    <>
      <Route exact path="/shop">
        <CollectionsOverview />
      </Route>
      <Route path="/shop/:collectionId">
        <CollectionPage />
      </Route>
    </>
  );
};

export default ShopPage;
