import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';

const ShopPage = ({ match }) => {
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
