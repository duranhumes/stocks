import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchSymbol } from '../actions';
import SymbolListItem from '../components/SymbolListItem';
import SymbolError from '../components/SymbolError';

class SymbolList extends React.Component {
	state = { searchTerm: '', placeholder: 'Search for stock by name' };

	_fetchSymbol = e => {
		e.preventDefault();
		this.props.onFetchSymbol(this.state.searchTerm);
		this.setState({ searchTerm: '' });
	};

	render() {
		return (
			<div className="symbolList">
				<form onSubmit={this._fetchSymbol} className="symbolListForm">
					<div className="input-group symbolListSearch">
						<input type="text" placeholder={this.state.placeholder} value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} className="form-control" />
						<div className="input-group-append">
							<span className="input-group-text" onClick={this._fetchSymbol}>
								<i className="fa fa-search fa-fw" />
							</span>
						</div>
					</div>
				</form>
				{this.props.error !== null && (
					<ul>
						<SymbolError data={this.props.error} />
					</ul>
				)}
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
	error: state.error,
});

const mapActionsToProps = {
	onFetchSymbol: fetchSymbol,
};

export default connect(mapStateToProps, mapActionsToProps)(SymbolList);
