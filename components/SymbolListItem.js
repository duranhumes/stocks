import Sparkline from '../components/Sparkline';

const SymbolListItem = ({ data: { data, price, symbol } }) => {
	let coloredPrice;
	let chartColor;
	price = parseFloat(price).toFixed(2);
	if (data[data.length - 2] > price) {
		chartColor = '#DA4D2F';
		coloredPrice = (
			<span className="price" style={{ color: '#DA4D2F' }}>
				{price}
			</span>
		);
	} else if (data[data.length - 2] < price) {
		chartColor = '#20c291';
		coloredPrice = (
			<span className="price" style={{ color: '#20c291' }}>
				{price}
			</span>
		);
	} else {
		chartColor = 'gray';
		coloredPrice = <span className="price">{price}</span>;
	}

	return (
		<li className="symbolWrapper">
			<span className="symbol">{symbol}</span>
			<span className="chart">
				<Sparkline data={data} color={chartColor} />
			</span>
			{coloredPrice}
		</li>
	);
};

export default SymbolListItem;
