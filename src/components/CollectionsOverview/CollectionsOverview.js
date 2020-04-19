import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/selectors/index';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionsOverviewContainer } from './style';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props}></CollectionPreview>
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
