import { combineReducers } from 'redux';

import symbolReducer from './symbolReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
	symbol: symbolReducer,
	error: errorReducer,
});

export default rootReducer;
