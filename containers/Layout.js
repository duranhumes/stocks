import Head from 'next/head';
import axios from 'axios';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Nav from '../components/Nav';
import rootReducer from '../reducers';

const storeEnhancers = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, storeEnhancers);

class Layout extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<Head>
						<title>Currencies</title>
						<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
						<link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
						<link rel="stylesheet" href="/static/style.css" />
					</Head>
					<div>{this.props.children}</div>
				</React.Fragment>
			</Provider>
		);
	}
}

export default Layout;
