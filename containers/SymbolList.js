import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchSymbol } from '../actions';
import SymbolListItem from '../components/SymbolListItem';

class SymbolList extends React.Component {
	state = { searchTerm: '' };

	_fetchSymbol = e => {
		e.preventDefault();
		this.props.onFetchSymbol(this.state.searchTerm);
		this.setState({ searchTerm: '' });
	};

	render() {
		return (
			<div className="symbolList">
				<form onSubmit={this._fetchSymbol} className="symbolListForm">
					<div className="symbolListSearch">
						<input type="text" value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} className="form-control" />
					</div>
				</form>
				{this.props.symbol && (
					<ul>
						{this.props.symbol.map((data, key) => {
							if (data[0]) {
								if (data[0].error) {
									return;
								}
							}
							return <SymbolListItem key={key} data={data} />;
						})}
					</ul>
				)}
			</div>
		);
	}
}

SymbolList.propTypes = {
	symbol: PropTypes.arrayOf(
		PropTypes.shape({
			data: PropTypes.array.isRequired,
			price: PropTypes.array.isRequired,
			symbol: PropTypes.array.isRequired,
		})
	).isRequired,
};

const mapStateToProps = state => ({
	symbol: state.symbol,
});

const mapActionsToProps = {
	onFetchSymbol: fetchSymbol,
};

export default connect(mapStateToProps, mapActionsToProps)(SymbolList);
