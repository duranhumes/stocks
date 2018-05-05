import Layout from '../containers/Layout';
import SymbolList from '../containers/SymbolList';
import CurrentSymbol from '../containers/CurrentSymbol';

class Home extends React.Component {
	render() {
		return (
			<Layout>
				<div className="wrapper">
					<SymbolList />
					<CurrentSymbol />
				</div>
			</Layout>
		);
	}
}

export default Home;
