import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ForgotPassword from './components/auth/ForgotPassword';
import AuthForm from './components/auth/AuthForm';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/login'>
					<AuthForm type='login' />
				</Route>
				<Route path='/signup'>
					<AuthForm type='signup' />
				</Route>
				<Route path='/forgot_password'>
					<ForgotPassword />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
