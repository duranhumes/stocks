import { ACTIVE_SYMBOL } from '../actions/types';

const structureSymbolData = payload => {
	const { chart, quote, news } = payload;
	const data = [];
	chart.map(price => {
		data.push(price.close, ...data);
	});
	return { data, quote, news, payload };
};

export default function(state = {}, { type, payload }) {
	switch (type) {
		case ACTIVE_SYMBOL:
			return structureSymbolData(payload);
		default:
			return state;
	}
}
