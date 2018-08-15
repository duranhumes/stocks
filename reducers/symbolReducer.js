import { FETCH_SYMBOL } from '../actions/types';

const structureSymbolData = payload => {
	const { chart, quote } = payload;
	const data = [];
	const price = quote.close;
	const symbol = quote.symbol;
	chart.map(price => {
		data.push(price.close, ...data);
	});
	return { data, price, symbol, payload };
};

export default function symbolReducer(state = [], { type, payload }) {
	switch (type) {
		case FETCH_SYMBOL:
			let data = structureSymbolData(payload);
			// Prevent symbols form being duplicated in list
			state.map(state => {
				if (data && data.symbol) {
					if (state.symbol === data.symbol) {
						data = undefined;
					}
				}
			});
			if (typeof data !== 'undefined') {
				return [data, ...state];
			}
			return [...state];
		default:
			return state;
	}
}
