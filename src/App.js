import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import ForgotPassword from './components/auth/ForgotPassword';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/signup'>
					<SignUp />
				</Route>
				<Route path='/forgot_password'>
					<ForgotPassword />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
