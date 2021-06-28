import { gql, useMutation } from '@apollo/client';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import Form from './Form';

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
const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`;
const SIGNUP = gql`
	mutation SignUp($email: String!, $password: String!) {
		signup(email: $email, password: $password) {
			id
			email
			password
		}
	}
`;
// const SIGNUP = gql`
// 	mutation SignUp($email: String!, $password: String!) {
// 		signup(email: $email, password: $password)
// 	}
// `;
//** TODO
// 1. work on signup form
// 2. make muation for signup
// 3. check working
const AuthForm = ({ type }) => {
	const [{ email, password }, setDetails] = useState({
		email: '',
		password: '',
	});
	const [err, setErr] = useState({
		clientErr: null,
		serverErr: null,
	});
	const btnRef = useRef();

	// const [login, { loading, error }] = useMutation(LOGIN, {
	// 	variables: { email, password },
	// });
	const [signup, { loading, error }] = useMutation(SIGNUP, {
		variables: { email, password },
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log('came');
			const { data } = await signup();
			console.log(data.signup);
			// if (type === 'login') {
			// 	const { data } = await login();
			// } else {
			// }
		} catch (err) {
			handleErrors('serverErr', err.message);
			btnRef.current.setAttribute('disabled', 'disabled');
		}
	};
	const handleErrors = (key, value) => {
		setErr({
			[key]: value,
		});
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
		<Container>
			<Title>{type === 'signup' ? 'Sign up' : 'Login'}</Title>
			<Form
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				details={(email, password)}
				errors={err}
				type={type}
				btnRef={btnRef}
			/>
		</Container>
	);
};
export default AuthForm;
