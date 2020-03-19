import React from 'react';
import { Wrapper, Title, Subtitle, Content, BackgroundImage } from './style';

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<Wrapper size={size}>
			<BackgroundImage imageUrl={imageUrl} />
			<Content>
				<Title>{title.toUpperCase()}</Title>
				<Subtitle>SHOP NOW</Subtitle>
			</Content>
		</Wrapper>
	);
};

export default MenuItem;
