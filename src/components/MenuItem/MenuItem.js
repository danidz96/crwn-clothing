import React from 'react';
import { Wrapper, Title, Subtitle, Content, BackgroundImage } from './style';
import { useHistory } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  return (
    <Wrapper size={size} onClick={() => history.push(`${linkUrl}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </Wrapper>
  );
};

export default MenuItem;
