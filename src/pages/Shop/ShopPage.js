import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/utils/firebase';

const ShopPage = () => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      await convertCollectionsSnapshotToMap(snapshot);
    });
  }, []);

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
