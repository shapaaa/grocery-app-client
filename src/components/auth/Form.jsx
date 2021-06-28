import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LoginButton } from '../pages/Home';
import errorIcon from '../../assets/error.svg';

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
	@media screen and (max-width: 530px) {
		width: 80%;
		min-width: 290px;
	}
	width: 70%;
`;
const InputContainer = styled.section`
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
	@media screen and (max-width: 480px) {
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
const Form = ({ details, errors, handleSubmit, handleChange, type, btnRef }) => {
	const { clientErr, serverErr } = errors;
	const { email, password } = details;

	return (
		<Container onSubmit={handleSubmit}>
			{clientErr && (
				<Error>
					<Icon src={errorIcon} />
					{`Error: please enter required
${clientErr}`}
				</Error>
			)}
			{serverErr && (
				<Error>
					<Icon src={errorIcon} />
					{serverErr}
				</Error>
			)}
			<InputContainer>
				<Label htmlFor='email'>Email</Label>
				<TextInput
					autoFocus={true}
					id='email'
					type='email'
					value={email}
					onChange={handleChange}
					required
				/>
			</InputContainer>
			<InputContainer>
				<Label htmlFor='password'>Password</Label>
				<TextInput
					id='new-password'
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					required
					autoComplete='new-password'
				/>
			</InputContainer>
			<Submit ref={btnRef} type='submit'>
				{type === 'signup' ? 'Sign Up' : 'Login'}
			</Submit>
			<Wrapper>
				{type === 'login' && <Forgot to='/forgot_password'>Forgot Password?</Forgot>}
				<Text>
					{type === 'login' ? (
						<>
							Don't have account
							<SignUp to='signup'> Sign Up ➜</SignUp>
						</>
					) : (
						<>
							Already have an account
							<SignUp to='login'>&ensp; Login ➜</SignUp>
						</>
					)}
				</Text>
			</Wrapper>
		</Container>
	);
};
export default Form;
