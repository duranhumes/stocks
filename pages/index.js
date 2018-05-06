import Layout from '../containers/Layout';
import SymbolList from '../containers/SymbolList';
import ActiveSymbol from '../containers/ActiveSymbol';

class Home extends React.Component {
	render() {
		return (
			<Layout>
				<div className="wrapper">
					<SymbolList />
					<ActiveSymbol />
				</div>
			</Layout>
		);
	}
}

export default Home;
