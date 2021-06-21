import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LoginButton } from '../pages/Home';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import errorIcon from '../../assets/error.svg';

const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`;
const Container = styled.form`
	border-radius: 4px;
	width: clamp(310px, 90vw, 500px);
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 20px #e1e1d9;
	background-color: white;
`;
const Input = css`
	@media screen and (max-width: 508px) {
		width: 80%;
		min-width: 290px;
	}
	width: 70%;
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 5px;
	${Input};
`;
const Submit = styled(LoginButton).attrs({ as: 'button' })`
	border: none;
	${Input};
	cursor: pointer;
	padding: 25px 0;
	margin: 30px 0;
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	${Input};
	@media screen and (max-width: 430px) {
		flex-direction: column;
		height: 60px;
	}
	justify-content: space-around;
`;
const Label = styled.label`
	padding: 10px 0;
	font-size: 16px;
`;
const TextInput = styled.input`
	height: 45px;
	padding: 0px 10px;
	border: 1px solid var(--black);
	border-radius: 4px;
`;
const Forgot = styled(Link)`
	color: #5a5a5a;
	font-size: 14px;
	margin-right: 5px;
`;
const SignUp = styled(Link)`
	color: var(--orange);
	text-decoration: none;
	font-size: 16px;
	font-weight: 600;
	line-height: 1.3;
`;
const Text = styled(Forgot).attrs({
	as: 'div',
})`
	font-size: 14px;
`;
const Error = styled.div`
	display: flex;
	align-items: center;
	background-color: rgb(247, 247, 247);
	color: black;
	padding: 5px 20px;
	font-size: 1.6rem;
	border-radius: 4px;
	margin-bottom: 10px;
`;
const Icon = styled.img`
	width: 40px;
	height: 35px;
	margin-top: 4px;
`;
const LoginForm = () => {
	const [{ email, password }, setDetails] = useState({
		email: '',
		password: '',
	});
	const [err, setErr] = useState(null);
	const [login, { loading, error }] = useMutation(LOGIN, {
		variables: {
			email,
			password,
		},
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email.length !== 0 && password.length !== 0) {
			try {
				const { data } = await login();
				console.log(data);
			} catch (err) {
				console.log(err.message);
			}
		} else {
			email.length === 0
				? email.length === 0 && password.length === 0
					? setErr({ clientErr: 'credentials' })
					: setErr({ clientErr: 'email' })
				: setErr({ clientErr: 'password' });
		}
	};
	const handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const type = e.target.type;
		setDetails((prevState) => ({ ...prevState, [type]: value }));
	};
	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<Container onSubmit={handleSubmit}>
			{err && (
				<Error>
					<Icon src={errorIcon} />
					{`Error: please enter required
${err}`}
				</Error>
			)}
			{error && (
				<Error>
					<Icon src={errorIcon} />
					{error.message}
				</Error>
			)}
			<InputContainer>
				<Label>Email</Label>
				<TextInput type='email' value={email} onChange={handleChange} />
			</InputContainer>
			<InputContainer>
				<Label>Password</Label>
				<TextInput type='password' value={password} onChange={handleChange} />
			</InputContainer>
			<Submit type='submit'>Log in</Submit>
			<Wrapper>
				<Forgot to='/forgot_password'>Forgot Password?</Forgot>
				<Text>
					Don't have account <SignUp to='signup'> Sign Up</SignUp>
				</Text>
			</Wrapper>
		</Container>
	);
};
export default LoginForm;
