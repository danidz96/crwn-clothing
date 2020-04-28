import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';
import {
  CollectionItemContainer,
  Image,
  Footer,
  Name,
  Price,
  CollectionItemButton,
} from './style';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CollectionItemButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
