import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
`;

const DirectoryMenu = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const MenuItem = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;

const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
`;

const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

const Subtitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;

const HomePage = () => {
	return (
		<Wrapper>
			<DirectoryMenu>
				<MenuItem>
					<Content>
						<Title>Title</Title>
						<Subtitle>Subtitle</Subtitle>
					</Content>
				</MenuItem>
				<MenuItem>
					<Content>
						<Title>Title</Title>
						<Subtitle>Subtitle</Subtitle>
					</Content>
				</MenuItem>
				<MenuItem>
					<Content>
						<Title>Title</Title>
						<Subtitle>Subtitle</Subtitle>
					</Content>
				</MenuItem>
				<MenuItem>
					<Content>
						<Title>Title</Title>
						<Subtitle>Subtitle</Subtitle>
					</Content>
				</MenuItem>
				<MenuItem>
					<Content>
						<Title>Title</Title>
						<Subtitle>Subtitle</Subtitle>
					</Content>
				</MenuItem>
			</DirectoryMenu>
		</Wrapper>
	);
};

export default HomePage;
