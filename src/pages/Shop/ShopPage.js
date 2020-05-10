import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import { fetchCollections } from '../../redux/shop/shopSlice';
import { selectIsCollectionLoading } from '../../redux/shop/selectors';

const ShopPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsCollectionLoading);
  useEffect(() => {
    dispatch(fetchCollections());
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
