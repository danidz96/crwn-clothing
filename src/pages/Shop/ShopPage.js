import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectShopCollections } from '../../redux/shop/selectors/index';

const ShopPage = () => {
  const collections = useSelector(selectShopCollections);
  return (
    <div>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props}></CollectionPreview>
      ))}
    </div>
  );
};

export default ShopPage;
