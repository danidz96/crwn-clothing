import React from 'react';

import { Wrapper, DirectoryMenu, MenuItem, Content, Title, Subtitle } from './style';

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
