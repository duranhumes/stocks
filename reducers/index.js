import { combineReducers } from 'redux';

import symbolReducer from './symbolReducer';
import activeSymbolReducer from './activeSymbolReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
	symbol: symbolReducer,
	activeSymbol: activeSymbolReducer,
	error: errorReducer,
});

export default rootReducer;
