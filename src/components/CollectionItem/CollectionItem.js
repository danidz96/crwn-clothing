import React from 'react';

import { CollectionItemContainer, Image, Footer, Name, Price } from './style';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
