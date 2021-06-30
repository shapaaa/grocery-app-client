import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './utils/GlobalStyle';
import reportWebVitals from './reportWebVitals';
import client from './apolloClient.js';
import { ApolloProvider } from '@apollo/client/react';
ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
