import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import collections from './data';

const ShopPage = () => {
  return (
    <div>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props}></CollectionPreview>
      ))}
    </div>
  );
};

export default ShopPage;
