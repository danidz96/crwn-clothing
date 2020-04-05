import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imageUrl }) => imageUrl});
  margin-bottom: 5px;
`;

export const CollectionItemButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  bottom: 40px;
  opacity: 0.7;
  display: none;
`;

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${CollectionItemButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
