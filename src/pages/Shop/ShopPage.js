import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import { fetchCollections } from '../../redux/shop/shopSlice';
import {
  selectIsCollectionLoading,
  selectIsCollectionsLoaded,
} from '../../redux/shop/selectors';

const ShopPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsCollectionLoading);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);
  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <>
      <Route exact path="/shop">
        {!isCollectionsLoaded ? 'Loading...' : <CollectionsOverview />}
      </Route>
      <Route path="/shop/:collectionId">
        {!isCollectionsLoaded ? 'Loading...' : <CollectionPage />}
      </Route>
    </>
  );
};

export default ShopPage;
