import Header from './Header';
import styled from 'styled-components';

const Container = styled.div``;
const New = styled.div`
	position: relative;
	top: 100px;
`;
const Home = () => {
	return (
		<Container>
			<Header />
			<New>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</New>
		</Container>
	);
};
export default Home;
