import Head from 'next/head';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const storeEnhancers = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, composeWithDevTools(storeEnhancers));

class Layout extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<Head>
						<title>Stock Watcher</title>
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
						/>
						<link
							rel="stylesheet"
							href="https://bootswatch.com/4/cosmo/bootstrap.min.css"
						/>
						<link
							rel="stylesheet"
							href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						/>
						<link rel="stylesheet" href="/static/style.css" />
					</Head>
					<div>{this.props.children}</div>
				</React.Fragment>
			</Provider>
		);
	}
}

export default Layout;
