import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const CartDropdownContainer = styled.div`
  width: 240px;
  height: 340px;
  position: absolute;
  top: 90px;
  right: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: scroll;
`;
