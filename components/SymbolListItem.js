import Sparkline from '../components/Sparkline';

class SymbolListItem extends React.Component {
	_setActive = () => {
		this.props.setActiveSymbol(this.props.data.payload);
		this.props.itemActive(this.props.data);
	};

	render() {
		let { data, price, symbol, payload } = this.props.data;
		let priceColor = 'grey';
		let chartColor = 'grey';
		price = parseFloat(price).toFixed(2);
		if (data[data.length - 2] > price) {
			chartColor = '#DA4D2F';
			priceColor = '#DA4D2F';
		} else if (data[data.length - 2] < price) {
			chartColor = '#20C291';
			priceColor = '#20C291';
		}

		return (
			<li
				className={`symbolWrapper ${this.props.active ? 'active' : ''}`}
				onClick={this._setActive}>
				<span className="symbol">{symbol}</span>
				<span className="chart">
					<Sparkline
						data={data}
						color={chartColor}
						style={styles.chartStyle}
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
