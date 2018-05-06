import _ from 'lodash';
import axios from 'axios';

import { apiKey } from '../config';
import { FETCH_SYMBOL, FETCH_ERROR, ACTIVE_SYMBOL } from './types';

export const fetchSymbol = (input, range = '1m', news = 10) => {
	let response;
	const url = `https://api.iextrading.com/1.0/stock/${input}/batch?types=quote,news,chart&range=${range}&last=${news}`;
	return dispatch => {
		return axios
			.get(url)
			.then(({ data }) => {
				dispatch({
					type: FETCH_SYMBOL,
					payload: data,
				});
			})
			.catch(error => {
				dispatch({
					type: FETCH_ERROR,
					payload: error,
				});
			});
	};
};

export const activeSymbol = symbol => {
	return {
		type: ACTIVE_SYMBOL,
		payload: symbol,
	};
};
