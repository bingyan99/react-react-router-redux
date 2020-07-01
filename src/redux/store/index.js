import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import incrementReducer from '../reducers'

// Actions must be plain objects. Use custom middleware for async actions.
const store = createStore(incrementReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState())
})

export default store;


