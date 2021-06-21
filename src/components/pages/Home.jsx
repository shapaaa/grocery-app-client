import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../../assets/cart.svg';
const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 40px 0;
`;
export const Title = styled.div`
	font-weight: 500;
	color: #ff9100;
	font-size: 40px;
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');
	font-family: 'Source Sans Pro', sans-serif;
`;
const SearchBox = styled.input`
	border: 2px solid #413f54;
	height: 40px;
	width: 450px;
	border-radius: 4px;
	padding-left: 20px;
	&:focus {
		box-shadow: 0 0 8px #dad8d8;
	}
`;
export const LoginButton = styled(Link)`
	height: 40px;
	width: 150px;
	display: flex;
	font-weight: 600;
	font-family: sans-serif;
	justify-content: center;
	align-items: center;
	background-color: #ff9100;
	color: #2b2d42;
	text-decoration: none;
	border-radius: 4px;
	font-size: 16px;
	&:hover {
		box-shadow: 0 0 6px #dad8d8;
	}
`;
const Text = styled.label`
	font-size: 16px;
	font-weight: 600;
	font-family: sans-serif;
	margin-top: 6px;
`;
const Icon = styled.img`
	height: 40px;
	width: 40px;
`;
const Cart = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-top: 2px;
	cursor: pointer;
`;

const Home = () => {
	return (
		<Container>
			<Title>GROCERY</Title>
			<SearchBox />
			<LoginButton to='/login'>Login</LoginButton>
			<Cart>
				<Icon src={cart} />
				<Text>Cart</Text>
			</Cart>
		</Container>
	);
};
export default Home;
