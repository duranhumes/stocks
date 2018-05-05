import _ from 'lodash';

import { FETCH_SYMBOL } from '../actions/types';

const structureSymbolData = data => {
	let prices = [];
	let currentPrice = [];
	let currentSymbol = [];
	let index = 0;
	if (data) {
		if (data['Time Series (Daily)']) {
			const obj = data['Time Series (Daily)'];
			const objKeys = _.keys(obj);
			const objKeysCount = objKeys.length - 85;
			for (const key of objKeys) {
				if (index <= objKeysCount) {
					prices = [obj[key]['4. close'], ...prices];
				}
				index++;
			}
			if (prices.length > 15) prices.splice(0, prices.length - 15);
			if (typeof currentSymbol !== 'undefined' && typeof currentPrice !== 'undefined') {
				currentSymbol = [data['Meta Data']['2. Symbol'], ...currentSymbol];
				currentPrice = [obj[objKeys[objKeysCount - 1]]['4. close'], ...currentPrice];
			}
		}
	}
	return { data: prices, price: currentPrice, symbol: currentSymbol };
};

export default function symbolReducer(state = [], { type, payload }) {
	switch (type) {
		case FETCH_SYMBOL:
			let data = structureSymbolData(payload.data);
			// Prevent symbols form being duplicated
			state.map(st => {
				if (data) {
					if (data.symbol[0]) {
						if (st.symbol[0] === data.symbol[0]) {
							data = undefined;
						}
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
	return state;
}
