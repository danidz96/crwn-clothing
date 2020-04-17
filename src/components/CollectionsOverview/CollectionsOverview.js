import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/selectors/index';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionsOverviewContainer } from './style';

const CollectionsOverview = () => {
  const collections = useSelector(selectShopCollections);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props}></CollectionPreview>
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
