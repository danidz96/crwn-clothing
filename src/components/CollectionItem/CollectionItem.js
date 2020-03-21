import React from 'react';

import { Wrapper, Image, Footer, Name, Price } from './style';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <Wrapper>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </Wrapper>
  );
};

export default CollectionItem;
