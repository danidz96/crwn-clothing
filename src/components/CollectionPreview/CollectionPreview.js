import React from 'react';
import { Wrapper, Title, Preview } from './style';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <Wrapper>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </Preview>
    </Wrapper>
  );
};

export default CollectionPreview;
