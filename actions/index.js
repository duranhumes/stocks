import _ from 'lodash';
import axios from 'axios';

import { apiKey } from '../config';
import { FETCH_SYMBOL, FETCH_ERROR } from './types';

export const fetchSymbol = input => {
	let response;
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${input.toUpperCase()}&outputsize=20&apikey=${apiKey}`;
	return dispatch => {
		return axios
			.get(url)
			.then(data => {
				if (!data.data['Error Message']) {
					dispatch({
						type: FETCH_SYMBOL,
						payload: data,
					});
				} else {
					dispatch({
						type: FETCH_ERROR,
						payload: [{ error: 'error' }],
					});
				}
			})
			.catch(error => {
				dispatch({
					type: FETCH_ERROR,
					payload: error,
				});
			});
	};
};
