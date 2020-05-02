import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;
export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
