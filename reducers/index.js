import { combineReducers } from 'redux';

import symbolReducer from './symbolReducer';

const rootReducer = combineReducers({
	symbol: symbolReducer,
});

export default rootReducer;
