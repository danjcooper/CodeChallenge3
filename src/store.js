import { createStore } from 'redux';
import repoReducer from './reducers/index';
// import { devToolsEnhancer } from 'redux-devtools-extension'; didn't install!

const store = createStore(repoReducer);