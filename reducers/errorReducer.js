import _ from 'lodash';

import { FETCH_ERROR, FETCH_SYMBOL } from '../actions/types';

export default function errorReducer(state = [], { type, payload }) {
	switch (type) {
		case FETCH_SYMBOL:
			return null;
		case FETCH_ERROR:
			return payload;
		default:
			return null;
	}
	return null;
}
