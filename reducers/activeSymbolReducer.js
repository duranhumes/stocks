import { ACTIVE_SYMBOL } from '../actions/types';

const structureSymbolData = payload => {
	const { chart, quote, news } = payload;
	const data = chart.map(({ close }) => close).filter(e => e !== undefined);
	return { data, quote, news, payload };
};

export default function(state = {}, { type, payload }) {
	switch (type) {
		case ACTIVE_SYMBOL:
			console.log(payload);
			// Update Price
			// let data = structureSymbolData(payload);
			// const existingSymbol = payload.find(e => e.symbol === data.symbol);
			// if (existingSymbol) {
			// 	existingSymbol.price = data.price;
			// }
			return structureSymbolData(payload);
		default:
			return state;
	}
}
