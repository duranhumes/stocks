import Sparkline from '../components/Sparkline';

class SymbolListItem extends React.Component {
	_setActive = payload => {
		this.props.setActiveSymbol(payload);
		this.props.itemActive(this.props.data);
	};

	render() {
		let { data, price, symbol, payload } = this.props.data;
		let priceColor = '';
		let chartColor = '';
		price = parseFloat(price).toFixed(2);
		if (data[data.length - 2] > price) {
			chartColor = '#DA4D2F';
			priceColor = '#DA4D2F';
		} else if (data[data.length - 2] < price) {
			chartColor = '#20C291';
			priceColor = '#20C291';
		} else {
			chartColor = 'grey';
			priceColor = 'grey';
		}

		const { chartStyle } = styles;
		const { datakey } = this.props;

		return (
			<li
				className={`symbolWrapper ${this.props.active ? 'active' : ''}`}
				onClick={() => this._setActive(payload, datakey)}>
				<span className="symbol">{symbol}</span>
				<span className="chart">
					<Sparkline
						data={data}
						color={chartColor}
						style={chartStyle}
						stroke="2"
					/>
				</span>
				<span className="price" style={{ color: priceColor }}>
					{price}
				</span>
			</li>
		);
	}
}

export default SymbolListItem;

const styles = {
	chartStyle: {
		height: 80,
		width: '65%',
		display: 'flex',
		justifyContent: 'center',
		margin: '0 auto',
	},
};
