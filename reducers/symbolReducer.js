import { FETCH_SYMBOL } from '../actions/types';

const structureSymbolData = payload => {
	const { chart, quote } = payload;
	const price = quote.latestPrice;
	const symbol = quote.symbol;
	const data = chart.map(({ close }) => close).filter(e => e !== undefined);
	return { data, price, symbol, payload };
};

export default function symbolReducer(state = [], { type, payload }) {
	switch (type) {
		case FETCH_SYMBOL:
			let data = structureSymbolData(payload);
			// Update Price
			const existingSymbol = state.find(e => e.symbol === data.symbol);
			if (existingSymbol) {
				existingSymbol.price = data.price;
			}
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
