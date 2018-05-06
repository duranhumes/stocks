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

	_num = value => {
		let newValue = value;
		if (value >= 1000) {
			let suffixes = ['', 'k', 'm', 'b', 't'];
			let suffixNum = Math.floor(('' + value).length / 3);
			let shortValue = '';
			let shortNum = '';
			for (let precision = 2; precision >= 1; precision--) {
				shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision));
				let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
				if (dotLessShortValue.length <= 2) {
					break;
				}
			}
			if (shortValue % 1 != 0) shortNum = shortValue.toFixed(1);
			newValue = shortValue + suffixes[suffixNum];
		}
		return newValue;
	};

	render() {
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

		const _formatNumber = number => {
			return parseFloat(number).toFixed(2);
		};

		const { headerStyle, leftHeaderStyle, rightHeaderStyle, symbolStyle, iconStyle, companyNameStyle, chartStyle, statStyle, statTitleStyle, statDataStyle, newsLinkStyle } = styles;
		console.log(this.props);
		return (
			<div className="activeSymbol">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							{quote && (
								<div style={headerStyle}>
									<div style={leftHeaderStyle}>
										<div className="currentPrice">${quote.close}</div>
										<span style={{ color: priceColor }}>
											{quote.change} ({quote.changePercent})
										</span>
										<span style={{ color: '#454c52' }}> {quote.latestTime}</span>
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
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">{data && <Sparkline data={data} color={chartColor} style={chartStyle} stroke="1" />}</div>
					</div>
					<div className="row">
						{quote && (
							<div className="col-lg-7">
								<h2>Stats</h2>
								<div className="row">
									<div className="col-lg-6">
										<div style={statStyle}>
											<span style={statTitleStyle}>Open</span>
											<span style={statDataStyle}>{_formatNumber(quote.open)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>High</span>
											<span style={statDataStyle}>{_formatNumber(quote.high)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>Low</span>
											<span style={statDataStyle}>{_formatNumber(quote.low)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>52 Wk High</span>
											<span style={statDataStyle}>{_formatNumber(quote.week52High)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>52 Wk Low</span>
											<span style={statDataStyle}>{_formatNumber(quote.week52Low)}</span>
										</div>
									</div>
									<div className="col-lg-6">
										<div style={statStyle}>
											<span style={statTitleStyle}>Vol</span>
											<span style={statDataStyle}>{this._num(quote.latestVolume)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>Avg Vol</span>
											<span style={statDataStyle}>{this._num(quote.avgTotalVolume)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>Mrkt Cap</span>
											<span style={statDataStyle}>{this._num(quote.marketCap)}</span>
										</div>
										<div style={statStyle}>
											<span style={statTitleStyle}>P/E Ratio</span>
											<span style={statDataStyle}>{_formatNumber(quote.peRatio)}</span>
										</div>
									</div>
								</div>
							</div>
						)}
						{news && (
							<div className="col-lg-5">
								<h2>News</h2>
								{news.map(news => {
									return (
										<div className="row" style={{ marginBottom: 20 }} key={news.headline}>
											<div className="col-lg-12">
												<p>{news.headline.length >= 55 ? news.headline.substring(0, 55) + '...' : news.headline}</p>
												<a href={news.url} style={newsLinkStyle} target="_blank">
													Read More
												</a>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
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
		height: 300,
		width: '85%',
		display: 'flex',
		justifyContent: 'center',
		margin: '30px auto',
	},
	statStyle: {
		borderBottom: '2px solid #091017',
		marginBottom: 5,
		paddingBottom: 10,
		paddingTop: 10,
		textTransform: 'uppercase',
	},
	statTitleStyle: {
		color: '#454c52',
	},
	statDataStyle: {
		textAlign: 'right',
		float: 'right',
		color: '#f7fbff',
	},
	newsLinkStyle: {
		color: '#20C291',
	},
};
