import { ACTIVE_SYMBOL } from '../actions/types';

const structureSymbolData = payload => {
	const { chart, quote, news } = payload;
	let data = [];
	const price = quote.close;
	const symbol = quote.symbol;
	chart.map(price => {
		data = [price.close, ...data];
	});
	return { data, quote, news, payload };
};

export default function(state = {}, { type, payload }) {
	switch (type) {
		case ACTIVE_SYMBOL:
			const data = structureSymbolData(payload);
			return data;
		default:
			return state;
	}
	return state;
}
