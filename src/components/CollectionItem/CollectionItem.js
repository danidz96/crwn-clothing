import React from 'react';
import {
  CollectionItemContainer,
  Image,
  Footer,
  Name,
  Price,
  CollectionItemButton,
} from './style';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CollectionItemButton inverted> Add to cart </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
