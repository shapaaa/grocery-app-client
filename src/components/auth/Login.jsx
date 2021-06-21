import styled from 'styled-components';
import LoginForm from './LoginForm';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f2f2f2;
	height: 100vh;
`;
const Title = styled.div`
	font-weight: 600;
	font-size: 30px;
	margin: 20px 0;
	font-family: 'Open Sans', sans-serif;
`;

const Login = () => {
	return (
		<Container>
			<Title>Login</Title>
			<LoginForm />
		</Container>
	);
};
export default Login;
