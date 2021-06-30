import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartIcon from '../../assets/cart';
import search from '../../assets/search.svg';
import { typeScale } from '../../utils/typography';

const Container = styled.div`
	display: flex;
	width: 100vw;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	height: 80px;
	background-color: white;
	z-index: 2;
	box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
`;
export const Title = styled.div`
	font-weight: 600;
	background: linear-gradient(
		to right,
		var(--orange) 6%,
		var(--light-orange) 30%,
		var(--dark-blue) 100%
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: ${typeScale.header2};
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap');
	font-family: 'Source Sans Pro', sans-serif;
`;
const SearchBox = styled.input`
	height: 45px;
	width: 600px;
	padding-left: 40px;
	font-size: ${typeScale.paragraph};
	font-weight: 400;
	color: var(--text-secondary);
	border: none;
	background: #f1f3f4 url(${search}) no-repeat 2% 53%;
	background-size: 20px 20px;
	transition: border-bottom 0.6s ease-out;
	&:focus,
	&:active {
		outline: none;
	}
`;
export const LoginButton = styled(Link)`
	height: 45px;
	width: 150px;
	display: flex;
	font-weight: 600;
	justify-content: center;
	align-items: center;
	background: var(--orange);
	color: white;
	text-decoration: none;
	border-radius: 3px;
	font-size: 16px;
	letter-spacing: 1.2px;
	&:hover {
		box-shadow: 0 0 6px #dad8d8;
	}
`;
const Text = styled.p`
	font-size: ${typeScale.paragraph};
	font-weight: 600;
	margin-top: -6px;
	letter-spacing: 1.2px;
	color: var(--orange);
`;
const Cart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2px;
	cursor: pointer;
`;

const Header = () => {
	return (
		<Container>
			<Title>GROCERY</Title>
			<SearchBox placeholder='Search for products' />
			<LoginButton to='/login'>Login</LoginButton>
			<Cart>
				<CartIcon />
				<Text>Cart</Text>
			</Cart>
		</Container>
	);
};
export default Header;

/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */
/* background: linear-gradient(to right, #30cfd0 0%, #330867 100%); */
