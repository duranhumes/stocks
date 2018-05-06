import _ from 'lodash';
import { connect } from 'react-redux';

import Sparkline from '../components/Sparkline';

class ActiveSymbol extends React.Component {
	_renderIcon = status => {
		if (status === 'Open') {
			return <i className="fa fa-check-circle" style={{ ...styles.iconStyle, color: '#20C291' }} />;
		} else {
			return <i className="fa fa-times-circle" style={{ ...styles.iconStyle, color: '#DA4D2F' }} />;
		}
	};

	render() {
		console.log(this.props);
		let {
			activeSymbol: { data, quote, news },
		} = this.props;
		let priceColor = '';
		let chartColor = '';
		let upOrDown = '';
		if (quote) {
			let price = quote.close;
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
		}

		const { headerStyle, leftHeaderStyle, rightHeaderStyle, symbolStyle, iconStyle, companyNameStyle, chartStyle } = styles;
		return (
			<div className="activeSymbol">
				<div className="container-fluid">
					{quote && (
						<div style={headerStyle}>
							<div style={leftHeaderStyle}>
								<div className="currentPrice">{quote.close}</div>
								<span>
									{quote.change} ({quote.changePercent})
								</span>
							</div>
							<div style={rightHeaderStyle}>
								<h1>{this._renderIcon(quote.latestSource)}</h1>
								<h2 style={symbolStyle}>{quote.symbol}</h2>
								<h5 style={companyNameStyle}>
									{quote.companyName} | {quote.primaryExchange}
								</h5>
							</div>
						</div>
					)}
					{data && <Sparkline data={data} color={chartColor} style={chartStyle} stroke="1" />}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		activeSymbol: state.activeSymbol,
	};
};

export default connect(mapStateToProps)(ActiveSymbol);

const styles = {
	headerStyle: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		paddingBottom: 30,
		borderBottom: '2px solid #091017',
	},
	leftHeaderStyle: {
		flex: 1,
	},
	rightHeaderStyle: {
		flex: 1,
		textAlign: 'right',
	},
	symbolStyle: {
		//
	},
	iconStyle: {
		// color: '#20C291',
		paddingTop: 20,
		paddingBottom: 20,
	},
	companyNameStyle: {
		color: '#454c52',
	},
	chartStyle: {
		height: 520,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		margin: '30px auto',
	},
};
