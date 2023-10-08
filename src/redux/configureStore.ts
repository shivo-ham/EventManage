// import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';

// const configureStore = () => {
//     return createStore(rootReducer, applyMiddleware(thunk));
// };
// export default configureStore;

import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducers/event/eventReducer';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const store: ToolkitStore<{ event: {}; }, AnyAction, [ThunkMiddleware<{ event: {}; }, AnyAction>]> = configureStore({
  reducer: {
    event: eventReducer
  },
})

export default store;