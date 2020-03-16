import React from 'react';
import { Wrapper, Title, Subtitle, Content } from './style';

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<Wrapper imageUrl={imageUrl} size={size}>
			<Content>
				<Title>{title}</Title>
				<Subtitle>SHOP NOW</Subtitle>
			</Content>
		</Wrapper>
	);
};

export default MenuItem;
