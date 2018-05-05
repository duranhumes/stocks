import Chart from '../components/Chart';

const SymbolListItem = ({ data: { data, price, symbol } }) => {
	let coloredPrice;
	let chartColor;
	price = parseFloat(price).toFixed(2);
	if (data[data.length - 2] > price) {
		chartColor = 'red';
		coloredPrice = <span className="price text-danger">{price}</span>;
	} else if (data[data.length - 2] < price) {
		chartColor = 'green';
		coloredPrice = <span className="price text-success">{price}</span>;
	} else {
		chartColor = 'gray';
		coloredPrice = <span className="price">{price}</span>;
	}

	return (
		<li className="symbolWrapper">
			<span className="symbol">{symbol}</span>
			<span className="chart">
				<Chart data={data} color={chartColor} />
			</span>
			{coloredPrice}
		</li>
	);
};

export default SymbolListItem;
