import styled from 'styled-components';

export const Wrapper = styled.div`
	min-width: 30%;
	height: ${({ size }) => (size === 'large' ? '380px' : '240px')};
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-size: cover;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;

export const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const Subtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;

export const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
`;
